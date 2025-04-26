# 该脚本用于构建并上传文件到指定的服务器

$loc = (Get-Item $PSScriptRoot).Parent.FullName
$server = "zengkun@pc:websites/AFunDog.github.io/"

Write-Host "当前脚本路径：$loc"
Set-Location $loc
& npm install
& npm run build

# 测试连接
$testCon = Test-Connection -ComputerName "pc" -ErrorAction SilentlyContinue -TcpPort 22
if ($testCon) {
    & scp -r "dist/*" $server
}
else {
    Write-Host "连接失败，请检查网络连接或服务器状态。"
    exit 1
}

