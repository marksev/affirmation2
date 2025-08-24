@echo off
REM Script to build APK locally on Windows
REM Requires Flutter SDK to be installed and in PATH

echo 🏗️  Building APK locally...
echo.

REM Check if Flutter is installed
flutter --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Flutter is not installed or not in PATH
    echo Please install Flutter SDK: https://flutter.dev/docs/get-started/install
    pause
    exit /b 1
)

echo ✅ Flutter detected
flutter --version | findstr "Flutter"
echo.

REM Get dependencies
echo 📦 Getting dependencies...
flutter pub get

REM Build APK
echo 🚀 Building APK...
flutter build apk --release

if %errorlevel% equ 0 (
    echo.
    echo ✅ APK built successfully!
    echo 📁 Location: build\app\outputs\flutter-apk\app-release.apk
    echo 📱 You can now install this APK on your Android device
    
    REM Check if APK exists and show size
    if exist "build\app\outputs\flutter-apk\app-release.apk" (
        echo 📊 APK created successfully
    )
) else (
    echo.
    echo ❌ APK build failed
    echo Please check the error messages above
    pause
    exit /b 1
)

echo.
echo Press any key to continue...
pause