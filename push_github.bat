@echo off
echo === Subindo Site OpenLife para o GitHub ===
echo.

cd /d "%~dp0"

git init
git config user.email "forgebrazil@gmail.com"
git config user.name "Forge Brazil"

git remote remove origin 2>nul
git remote add origin https://github.com/Forge-Brazil/Site-OpenLife.git

git add -A
git commit -m "feat: adiciona tag Google Analytics G-XY5VQMM39X"

git branch -M main
git push -u origin main

echo.
echo === Concluido! Verifique o GitHub. ===
pause
