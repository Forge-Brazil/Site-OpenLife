@echo off
echo === Subindo Site OpenLife para o GitHub ===
echo.

cd /d "%~dp0"

:: Configura git se necessario
git config user.email "forgebrazil@gmail.com"
git config user.name "Forge Brazil"

:: Garante o remote correto
git remote remove origin 2>nul
git remote add origin https://github.com/Forge-Brazil/Site-OpenLife.git

:: Solicita mensagem de commit
set /p MSG="Mensagem do commit (Enter para usar 'chore: update site'): "
if "%MSG%"=="" set MSG=chore: update site

git add -A
git commit -m "%MSG%"

git branch -M main
git push -u origin main

echo.
echo === Concluido! Railway fara o deploy automaticamente. ===
echo === Acompanhe em: https://railway.app ===
pause
