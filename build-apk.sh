#!/bin/bash

# Affirmation App - APK Build Script
echo "🚀 Building Affirmation App APK..."

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Sync Capacitor
echo "🔄 Syncing Capacitor..."
npx cap sync

# Build the APK
echo "🔨 Building Android APK..."
cd android
./gradlew assembleDebug

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ APK built successfully!"
    echo "📱 APK location: android/app/build/outputs/apk/debug/app-debug.apk"
    
    # Show APK size
    if [ -f "app/build/outputs/apk/debug/app-debug.apk" ]; then
        SIZE=$(du -h app/build/outputs/apk/debug/app-debug.apk | cut -f1)
        echo "📏 APK size: $SIZE"
    fi
else
    echo "❌ Build failed. Please check the error messages above."
    echo "💡 Make sure you have:"
    echo "   - Java 17+ installed"
    echo "   - Android SDK installed"
    echo "   - ANDROID_HOME environment variable set"
    exit 1
fi