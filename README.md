# Affirmation App

A Flutter mobile application for positive affirmations organized by categories.

## Features

- **12 Affirmation Categories**: Self-Love, Confidence, Success, Health, Abundance, Gratitude, Relationships, Healing, Mindfulness, Motivation, Positivity, and Stress Relief
- **Responsive Design**: Works on iOS, Android, and web platforms
- **Interactive Categories**: Tap any category to view related affirmations
- **Swipeable Interface**: Smooth swipe navigation between affirmations
- **Modern UI**: Beautiful gradient background and card-based layout
- **Smooth Animations**: Fluid transitions and slide animations

## How to Use

### For Development:
1. Install Flutter SDK (https://flutter.dev/docs/get-started/install)
2. Clone this repository
3. Run `flutter pub get` to install dependencies
4. Run `flutter run` to start the app

### For Users:
1. Browse the 12 affirmation categories displayed in a grid
2. Tap on any category to view its positive affirmations
3. Swipe up/down to navigate between affirmations (like the original HTML5 app)
4. Tap the back button to return to categories

### Platform-Specific Instructions:
- **Mobile (iOS/Android)**: Install Flutter and run `flutter run`
- **Web**: Run `flutter run -d chrome` or `flutter build web`
- **Desktop**: Run `flutter run -d windows/macos/linux`

### APK Download (Android Testing):

#### Option 1: Download from GitHub Actions (Recommended)
1. Go to the [Actions tab](../../actions) in this repository
2. Click on the latest "Build and Release APK" workflow run
3. Download the "affirmation-app-apk" artifact
4. Extract the ZIP file to get the APK
5. Install the APK on your Android device (enable "Install unknown apps" in settings)

#### Option 2: Download from Releases
1. Go to the [Releases page](../../releases) 
2. Download the latest APK file
3. Install directly on your Android device

#### Option 3: Build Locally (Requires Flutter SDK)
1. Install Flutter SDK: https://flutter.dev/docs/get-started/install
2. Clone this repository
3. Run the build script:
   - **Linux/Mac**: `./build-apk.sh`
   - **Windows**: `build-apk.bat`
4. APK will be created in `build/app/outputs/flutter-apk/app-release.apk`

## Project Structure

- `lib/main.dart` - Main app entry point
- `lib/screens/home_screen.dart` - Categories grid screen
- `lib/screens/affirmation_viewer_screen.dart` - Swipeable affirmation viewer
- `lib/models/affirmation_data.dart` - Data models and affirmation content
- `lib/widgets/category_card.dart` - Reusable category card widget
- `pubspec.yaml` - Flutter dependencies and configuration

## Platform Support

This Flutter app supports:
- iOS (iPhone/iPad)
- Android (phones/tablets) - APK available via GitHub Actions
- Web browsers
- Desktop (Windows/macOS/Linux)

## APK Build Process

This repository includes GitHub Actions automation that:
- Automatically builds an APK when code is pushed to main branch
- Can be manually triggered from the Actions tab
- Uploads the APK as a downloadable artifact
- Works without needing local Flutter/Android SDK setup

## Requirements

- Flutter SDK 3.0.0 or higher
- Dart 3.0.0 or higher