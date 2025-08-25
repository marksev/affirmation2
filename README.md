# Hello World Android App

A simple Android application that displays "HELLO WORLD" on the screen.

## Features

- Clean and simple Android app
- Displays "HELLO WORLD" message in large text
- Centered layout
- Material Design theme
- Automatic APK building via GitHub Actions

## Getting Started

### Prerequisites

- Android SDK
- Java 17+

### Building the App

1. Clone this repository
2. Navigate to the `android` directory
3. Run `./gradlew assembleRelease` to build the APK

### APK Download

The APK is automatically built using GitHub Actions on every push to the main branch. You can download the latest APK from the Actions artifacts.

## Project Structure

```
├── android/               # Android project
│   ├── app/
│   │   ├── src/main/kotlin/com/example/hello_world_app/
│   │   │   └── MainActivity.kt    # Main activity that shows HELLO WORLD
│   │   └── src/main/AndroidManifest.xml
│   ├── build.gradle       # Project build configuration
│   └── gradlew           # Gradle wrapper
├── .github/workflows/     # GitHub Actions workflow
└── README.md
```

## How it Works

When you open the app, it displays a centered "HELLO WORLD" text with:
- Large font size (32sp)
- Centered in the middle of the screen
- Material Design theme
- Clean, white background