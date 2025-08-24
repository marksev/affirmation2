#!/bin/bash

# Script to build APK locally
# Requires Flutter SDK to be installed and in PATH

echo "🏗️  Building APK locally..."
echo ""

# Check if Flutter is installed
if ! command -v flutter &> /dev/null; then
    echo "❌ Flutter is not installed or not in PATH"
    echo "Please install Flutter SDK: https://flutter.dev/docs/get-started/install"
    exit 1
fi

echo "✅ Flutter detected: $(flutter --version | head -n1)"
echo ""

# Get dependencies
echo "📦 Getting dependencies..."
flutter pub get

# Build APK
echo "🚀 Building APK..."
flutter build apk --release

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ APK built successfully!"
    echo "📁 Location: build/app/outputs/flutter-apk/app-release.apk"
    echo "📱 You can now install this APK on your Android device"
    
    # Get APK size
    if [ -f "build/app/outputs/flutter-apk/app-release.apk" ]; then
        size=$(du -h build/app/outputs/flutter-apk/app-release.apk | cut -f1)
        echo "📊 APK Size: $size"
    fi
else
    echo ""
    echo "❌ APK build failed"
    echo "Please check the error messages above"
    exit 1
fi