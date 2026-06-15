$filePath = 'c:\Users\XXUZ\Desktop\锦绣西南纹理_files\锦绣西南纹理.html'
$bytes = [System.IO.File]::ReadAllBytes($filePath)
$content = [System.Text.Encoding]::UTF8.GetString($bytes)

$oldStr = '动物鸟兽类（57）'
$newStr = '黑地描金'

if ($content.Contains($oldStr)) {
    Write-Host "Found pattern in UTF8"
    $newContent = $content.Replace($oldStr, $newStr)
    $newBytes = [System.Text.Encoding]::UTF8.GetBytes($newContent)
    [System.IO.File]::WriteAllBytes($filePath, $newBytes)
    Write-Host "Replacement done"
} else {
    Write-Host "Pattern not found in UTF8"
    $gbk = [System.Text.Encoding]::GetEncoding('GBK')
    $gbkContent = $gbk.GetString($bytes)
    if ($gbkContent.Contains($oldStr)) {
        Write-Host "Found pattern in GBK"
        $newGbkContent = $gbkContent.Replace($oldStr, $newStr)
        $newBytes = $gbk.GetBytes($newGbkContent)
        [System.IO.File]::WriteAllBytes($filePath, $newBytes)
        Write-Host "Replacement done with GBK"
    } else {
        Write-Host "Pattern not found in either encoding"
    }
}