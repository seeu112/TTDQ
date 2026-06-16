# 检查图片文件是否存在
$imageDirs = @('黑地描金', '犀皮漆')
$basePath = 'c:\Users\XXUZ\Desktop\锦绣西南纹理_files'

foreach ($dir in $imageDirs) {
    $dirPath = Join-Path $basePath $dir
    Write-Host "检查目录: $dirPath"
    
    if (Test-Path $dirPath) {
        $images = Get-ChildItem -Path $dirPath -Filter '*.png' | Sort-Object Name
        Write-Host "找到 $($images.Count) 张图片"
        
        foreach ($image in $images) {
            $imagePath = $image.FullName
            Write-Host "  - $($image.Name)"
        }
    } else {
        Write-Host "  目录不存在!"
    }
    Write-Host
}

# 检查HTML文件中的图片路径
Write-Host "检查HTML文件中的图片路径"
$htmlPath = Join-Path $basePath '锦绣西南纹理.html'
if (Test-Path $htmlPath) {
    $htmlContent = Get-Content $htmlPath -Raw
    
    # 提取图片路径
    $imagePaths = [regex]::Matches($htmlContent, 'url\(([^)]+)\)') | ForEach-Object { $_.Groups[1].Value }
    
    Write-Host "找到 $($imagePaths.Count) 个图片路径"
    foreach ($path in $imagePaths) {
        if ($path -like '*file:///*') {
            # 转换为本地路径
            $localPath = $path -replace 'file:///', ''
            $localPath = $localPath -replace '/', '\'
            $localPath = $localPath -replace '\'', ''
            $localPath = $localPath -replace '"', ''
            
            if (Test-Path $localPath) {
                Write-Host "  ✓ $localPath"
            } else {
                Write-Host "  ✗ $localPath (不存在)"
            }
        } else {
            Write-Host "  ? $path (非绝对路径)"
        }
    }
} else {
    Write-Host "HTML文件不存在!"
}