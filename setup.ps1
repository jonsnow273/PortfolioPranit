# Portfolio Setup Script
Write-Host "Setting up Pranit's Portfolio..." -ForegroundColor Cyan

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js is not installed. Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "Dependencies installed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Setup complete! You can now run:" -ForegroundColor Cyan
    Write-Host "  npm run dev    - Start development server" -ForegroundColor White
    Write-Host "  npm run build  - Build for production" -ForegroundColor White
    Write-Host "  npm run start  - Start production server" -ForegroundColor White
    Write-Host ""
    Write-Host "Don't forget to:" -ForegroundColor Yellow
    Write-Host "1. Replace public/resume.pdf with your actual resume" -ForegroundColor White
    Write-Host "2. Set up EmailJS for the contact form (see README.md)" -ForegroundColor White
} else {
    Write-Host "Failed to install dependencies. Please check your internet connection and try again." -ForegroundColor Red
}