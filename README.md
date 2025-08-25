# Affirmation App - HTML Version

A positive affirmation mobile app built with HTML, CSS, JavaScript, and Capacitor for Android APK generation.

## 🌟 Features

- **12 Affirmation Categories**: Self-Love, Confidence, Success, Health, Abundance, Gratitude, Relationships, Healing, Mindfulness, Motivation, Positivity, and Stress Relief
- **8 Affirmations per Category**: Total of 96 carefully crafted positive affirmations
- **Beautiful Gradient UI**: Responsive design with smooth animations
- **Touch Navigation**: Swipe between affirmations on mobile devices
- **Keyboard Support**: Arrow keys for navigation on desktop
- **Mobile-Optimized**: Responsive design for all screen sizes

## 📱 Screenshots

### Home Screen - Category Selection
![Home Screen](https://github.com/user-attachments/assets/fb6b73f9-abcc-43a9-b83c-d4b30ca05992)

### Affirmation Viewer
![Affirmation Screen](https://github.com/user-attachments/assets/4cf5f356-2119-4568-8189-c066d52bbe5f)

## 🚀 Quick Start

### Web Version
1. Open `index.html` in your web browser
2. Or run a local server:
   ```bash
   python3 -m http.server 8080
   # Then visit http://localhost:8080
   ```

### Android APK Build

#### Prerequisites
- Node.js 18+ installed
- Java 17+ installed
- Android SDK installed
- Gradle installed

#### Build Steps
1. **One-command build:**
   ```bash
   npm run build-apk
   ```

2. **Manual build steps:**
   ```bash
   npm install
   npx cap sync
   cd android
   ./gradlew assembleDebug
   ```

3. **Find your APK at:**
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

#### Alternative: Use Android Studio
1. Open the `android` folder in Android Studio
2. Build → Generate Signed Bundle / APK
3. Follow the wizard to create your APK

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── app.js             # JavaScript application logic
├── data.js            # Affirmation data
├── www/               # Capacitor web assets
├── android/           # Generated Capacitor Android project
├── capacitor.config.json  # Capacitor configuration
└── package.json       # Node.js dependencies
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple gradient (#667eea to #764ba2)
- **Card-Based Layout**: Clean white cards for categories and affirmations
- **Smooth Animations**: CSS transitions for screen changes and interactions
- **Touch Gestures**: Swipe left/right to navigate affirmations
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Safe Area Support**: iOS/Android safe area compatibility

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks or dependencies
- **Capacitor**: Cross-platform native runtime
- **Android Target**: API level configured for modern devices
- **Touch Events**: Native touch gesture support
- **Keyboard Navigation**: Arrow keys and Escape key support

## 📱 How to Use

1. **Home Screen**: Select any of the 12 affirmation categories
2. **Affirmation View**: Read the affirmation and navigate with:
   - Swipe left/right (mobile)
   - Click navigation arrows
   - Use arrow keys (desktop)
   - Press Escape to go back
3. **Back Navigation**: Return to category selection

## 🛠️ Development

### Local Development
```bash
# Serve locally for testing
npm run serve
# Then visit http://localhost:8080

# Or use any static file server
npx serve .
```

### Capacitor Commands
```bash
# Add platform
npx cap add android

# Sync changes
npx cap sync

# Open in Android Studio
npx cap open android
```

## 📝 License

This project is open source and available under the MIT License.