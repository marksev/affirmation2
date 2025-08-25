# React Affirmation App

A modern affirmation application built with React (web) and React Native (mobile), featuring 12 positive affirmation categories to inspire and motivate users.

## Features

- **12 Affirmation Categories**: Self-Love, Confidence, Success, Health, Abundance, Gratitude, Relationships, Healing, Mindfulness, Motivation, Positivity, and Stress Relief
- **Web & Mobile**: React web app and React Native mobile app for cross-platform experience
- **Interactive Categories**: Tap any category to view related affirmations
- **Smooth Navigation**: Navigate between affirmations with Previous/Next buttons
- **Modern UI**: Beautiful gradient background and card-based layout
- **Responsive Design**: Works seamlessly across different screen sizes
- **Offline Support**: No internet required after initial load

## Project Structure

```
├── src/                 # React web app source code
│   ├── components/      # Reusable React components
│   ├── data/           # Affirmation data
│   └── ...
├── mobile/             # React Native mobile app
│   ├── src/            # React Native source code
│   ├── android/        # Android-specific files
│   ├── ios/            # iOS-specific files (if needed)
│   └── ...
└── .github/workflows/  # CI/CD workflows
```

## How to Use

### For Development:

#### Web App (React)
1. Ensure you have Node.js 18+ installed
2. Clone this repository
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. Open http://localhost:5173 in your browser

#### Mobile App (React Native)
1. Ensure you have Node.js 18+ and React Native development environment setup
2. Navigate to the `mobile` directory: `cd mobile`
3. Run `npm install` to install dependencies
4. For Android: `npm run android` (requires Android emulator or device)
5. For iOS: `npm run ios` (requires macOS and Xcode)

### For Users:

#### Web App
Visit the deployed web application or download the build artifacts from GitHub Actions.

#### Android APK Download:

##### Option 1: Download from GitHub Actions (Recommended)
1. Go to the [Actions tab](../../actions) in this repository
2. Click on the latest "Build and Release React Native APK" workflow run
3. Download the "affirmation-react-native-apk" artifact
4. Extract the ZIP file to get the APK
5. Install the APK on your Android device (enable "Install unknown apps" in settings)

##### Option 2: Build Locally (Requires React Native SDK)
1. Install Node.js 18+: https://nodejs.org/
2. Set up React Native development environment: https://reactnative.dev/docs/environment-setup
3. Clone this repository
4. Navigate to mobile directory: `cd mobile`
5. Run `npm install`
6. Run `cd android && ./gradlew assembleRelease`
7. APK will be created in `mobile/android/app/build/outputs/apk/release/app-release.apk`

## Technology Stack

- **Web**: React 19, TypeScript, Vite, CSS3
- **Mobile**: React Native 0.75, TypeScript
- **Build Tools**: Vite (web), Gradle (Android)
- **CI/CD**: GitHub Actions

## Requirements

- Node.js 18.0.0 or higher
- npm or yarn
- For mobile development: React Native CLI and Android SDK/Xcode

## Building for Production

### Web App
```bash
npm run build
```
The build artifacts will be in the `dist/` directory.

### Mobile App
```bash
cd mobile
# For Android
cd android && ./gradlew assembleRelease
# APK will be in android/app/build/outputs/apk/release/
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both web and mobile apps
5. Submit a pull request

## License

This project is open source and available under the MIT License.
