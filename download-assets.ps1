# Download all assets from GitHub repository
$baseUrl = "https://raw.githubusercontent.com/Abdullahxfarooqui/J7-Emporium/main/public"
$publicDir = "$PSScriptRoot\public"

# Create directories
New-Item -ItemType Directory -Force -Path "$publicDir\assets\images" | Out-Null

Write-Host "Downloading image assets..." -ForegroundColor Green

# Image files
$images = @(
    "assets/images/Map-scaled.webp",
    "assets/images/apartment.png",
    "assets/images/com-shop.webp",
    "assets/images/const-bg.png",
    "assets/images/const.png",
    "assets/images/food-court.jpeg",
    "assets/images/j7-emporium-bg.webp",
    "assets/images/j7-logo.jpg",
    "assets/images/radisson.png",
    "file.svg",
    "globe.svg",
    "next.svg",
    "vercel.svg",
    "window.svg"
)

$count = 0
foreach ($image in $images) {
    $url = "$baseUrl/$image"
    $output = "$publicDir\$image"
    
    try {
        Write-Host "Downloading $image..." -ForegroundColor Cyan
        Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
        $count++
        Write-Host "Downloaded $image" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $image" -ForegroundColor Red
        Write-Host "Error: $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Download complete! $count of $($images.Count) files downloaded." -ForegroundColor Green
