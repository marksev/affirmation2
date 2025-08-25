# React Native Affirmation App

A React Native mobile application featuring 12 positive affirmation categories to inspire and motivate users. Built with Expo and TypeScript.

## Features

- **12 Affirmation Categories**: Self-Love, Confidence, Success, Health, Abundance, Gratitude, Relationships, Healing, Mindfulness, Motivation, Positivity, and Stress Relief
- **Cross-Platform**: Works on iOS and Android
- **Interactive Categories**: Tap any category to view related affirmations
- **Swipeable Interface**: Smooth swipe navigation between affirmations
- **Modern UI**: Beautiful gradient background and card-based layout
- **TypeScript**: Fully typed for better development experience

## How to Use

### For Development:

1. Ensure you have Node.js (v18+) installed
2. Clone this repository
3. Run `npm install` to install dependencies
4. Run `npm start` to start the Expo development server
5. Use Expo Go app on your phone or run on simulator

### For Users:

Download the APK from GitHub Actions artifacts to install on Android devices.

### APK Download (Android Testing):

#### Option 1: Download from GitHub Actions (Recommended)
1. Go to the [Actions tab](../../actions) in this repository
2. Click on the latest "Build and Release React Native APK" workflow run
3. Download the "affirmation-app-apk" artifact
4. Extract the ZIP file to get the APK
5. Install the APK on your Android device (enable "Install unknown apps" in settings)

#### Option 2: Build Locally (Requires Node.js and Android SDK)
1. Install Node.js: https://nodejs.org/
2. Install Android Studio: https://developer.android.com/studio
3. Clone this repository
4. Run `npm install`
5. Run `npm run android` (requires Android emulator or connected device)

## Requirements

- Node.js 18.0.0 or higher
- Expo CLI
- For Android builds: Android SDK and Java 17

## Development Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start the app on Android
- `npm run ios` - Start the app on iOS (macOS only)
- `npm run web` - Start the app in web browser

## Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Navigation library
- **Expo Linear Gradient** - Gradient backgrounds

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # App screens
├── data/          # Static data (affirmations)
├── types/         # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request