# Flutter Affirmation App

A Flutter mobile application featuring 12 positive affirmation categories to inspire and motivate users.

## Features

- **12 Affirmation Categories**: Self-Love, Confidence, Success, Health, Abundance, Gratitude, Relationships, Healing, Mindfulness, Motivation, Positivity, and Stress Relief
- **Responsive Design**: Works on iOS, Android, and web platforms
- **Interactive Categories**: Tap any category to view related affirmations
- **Swipeable Interface**: Smooth swipe navigation between affirmations
- **Modern UI**: Beautiful gradient background and card-based layout

## How to Use

### For Development:
1. Ensure you have Flutter SDK installed
2. Clone this repository
3. Run `flutter pub get` to install dependencies
4. Run `flutter run` to start the app

### For Users:
Download the APK from GitHub Actions artifacts or releases to install on Android devices.

### APK Download (Android Testing):

#### Option 1: Download from GitHub Actions (Recommended)
1. Go to the [Actions tab](../../actions) in this repository
2. Click on the latest "Build and Release APK" workflow run
3. Download the "affirmation-app-apk" artifact
4. Extract the ZIP file to get the APK
5. Install the APK on your Android device (enable "Install unknown apps" in settings)

#### Option 2: Build Locally (Requires Flutter SDK)
1. Install Flutter SDK: https://flutter.dev/docs/get-started/install
2. Clone this repository
3. Run `flutter pub get`
4. Run `flutter build apk --release`
5. APK will be created in `build/app/outputs/flutter-apk/app-release.apk`

## Requirements

- Flutter SDK 3.0.0 or higher
- Dart 3.0.0 or higher