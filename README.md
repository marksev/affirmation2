# Hello World Flutter App

A simple Flutter application that displays "HELLO WORLD" on the screen.

## Features

- Clean and simple Flutter app
- Displays "HELLO WORLD" message
- Material Design UI
- Automatic APK building via GitHub Actions

## Getting Started

### Prerequisites

- Flutter SDK (3.24.3 or later)
- Android SDK
- Java 17+

### Building the App

1. Clone this repository
2. Run `flutter pub get` to install dependencies
3. Run `flutter build apk --release` to build the APK

### APK Download

The APK is automatically built using GitHub Actions on every push to the main branch. You can download the latest APK from the Actions artifacts.

## Project Structure

```
├── lib/
│   └── main.dart          # Main Flutter app code
├── android/               # Android-specific configuration
├── .github/workflows/     # GitHub Actions workflow
└── pubspec.yaml          # Flutter dependencies
```

## How it Works

When you open the app, it displays a centered "HELLO WORLD" text with:
- Purple color scheme
- Bold, large font size
- Material Design app bar
- Clean, minimalist design