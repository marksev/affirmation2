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

1. Install Flutter SDK (https://flutter.dev/docs/get-started/install)
2. Clone this repository
3. Run `flutter pub get` to install dependencies
4. Run `flutter run` to start the app
5. Browse the 12 affirmation categories displayed in a grid
6. Tap on any category to view its positive affirmations
7. Swipe left/right to navigate between affirmations
8. Tap the back button to return to categories

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
- Android (phones/tablets)
- Web browsers
- Desktop (Windows/macOS/Linux)

## Requirements

- Flutter SDK 3.0.0 or higher
- Dart 3.0.0 or higher