# One-time fix for "Invalid Version" / "next not recognized" then install and build.
# Run in PowerShell: .\setup-and-build.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "1. Clearing bad npm config (devdir, version)..." -ForegroundColor Cyan
npm config delete devdir 2>$null
npm config delete version 2>$null

Write-Host "2. Unsetting env vars that can cause Invalid Version..." -ForegroundColor Cyan
$env:devdir = $null
$env:npm_config_devdir = $null
$env:npm_config_version = $null
$env:version = $null

Write-Host "3. Installing dependencies (trying npm, then pnpm)..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "npm failed. Trying pnpm instead..." -ForegroundColor Yellow
    $pnpm = Get-Command pnpm -ErrorAction SilentlyContinue
    if ($pnpm) {
        pnpm install
    } else {
        Write-Host "Install pnpm first: npm install -g pnpm" -ForegroundColor Yellow
        Write-Host "Then run: pnpm install" -ForegroundColor White
        exit 1
    }
}
if ($LASTEXITCODE -ne 0) { exit 1 }

Write-Host "4. Building..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit 1 }

Write-Host "Done. Run 'npm run dev' to start the app." -ForegroundColor Green
