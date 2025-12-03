param(
    [int]$IntervalSeconds = 15,
    [string]$RepoPath,
    [string]$LogPath,
    [switch]$RunOnce
)

$defaultRepoPath = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }
if (-not $RepoPath) {
    $RepoPath = $defaultRepoPath
}

if (-not $LogPath) {
    $LogPath = Join-Path $RepoPath '.git\auto-pull.log'
}

if (-not (Test-Path -Path $RepoPath)) {
    throw "The repository path '$RepoPath' does not exist."
}

if (-not (Test-Path -Path (Join-Path $RepoPath '.git'))) {
    throw "The path '$RepoPath' is not a git repository."
}

$logFolder = Split-Path -Path $LogPath -Parent
if ($logFolder -and -not (Test-Path -Path $logFolder)) {
    New-Item -ItemType Directory -Path $logFolder | Out-Null
}

$ProgressPreference = 'SilentlyContinue'

while ($true) {
    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    Push-Location $RepoPath
    $result = & git pull --ff-only 2>&1
    $exitCode = $LASTEXITCODE
    Pop-Location

    $status = if ($exitCode -eq 0) { 'ok' } else { 'error' }
    $entry = @(
        "[$timestamp] git pull --ff-only ($status)",
        $result,
        ''
    ) -join [Environment]::NewLine

    Add-Content -Path $LogPath -Value $entry

    if ($RunOnce) {
        break
    }

    Start-Sleep -Seconds $IntervalSeconds
}
