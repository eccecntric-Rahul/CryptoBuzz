# CryptoBuzz 📱

A modern React Native mobile application for staying updated with the latest cryptocurrency news and market information. CryptoBuzz provides real-time crypto news, filtering capabilities, and a sleek user interface designed for crypto enthusiasts.

## 🚀 Features

- **Real-time Crypto News**: Get the latest cryptocurrency news from reliable sources
- **Smart Filtering**: Filter news by specific cryptocurrencies and news types
- **Offline Support**: View cached news when offline with last updated timestamps
- **Modern UI/UX**: Clean, intuitive interface with dark/light theme support
- **Responsive Design**: Optimized for both iOS and Android platforms
- **News Details**: Full article viewing with sharing capabilities
- **Network Status**: Real-time network connectivity monitoring


## 🛠 Tech Stack

- **Framework**: React Native 0.80.0
- **Language**: TypeScript
- **Navigation**: React Navigation v7
- **State Management**: Zustand with MMKV storage
- **Data Fetching**: React Query (TanStack Query)
- **UI Components**: React Native Paper
- **Icons**: Lucide React Native
- **Network**: Axios for API calls
- **Storage**: MMKV for fast local storage
- **Testing**: Jest & React Native Testing Library

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (>= 18)
- Yarn package manager
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- CocoaPods (for iOS dependencies)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CryptoBuzz
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Start Metro bundler**
   ```bash
   yarn start
   ```

5. **Run the application**

   **For iOS:**
   ```bash
   yarn ios
   ```

   **For Android:**
   ```bash
   yarn android
   ```

## 🏗 Project Structure

```
src/
├── api/                 # API services and configurations
├── components/          # Reusable UI components
├── constants/           # App constants and configuration
├── hooks/              # Custom React hooks
├── icons/              # Icon components
├── images/             # Static images and assets
├── navigation/         # Navigation configuration
├── redux/              # State management (Zustand stores)
├── screens/            # Screen components
├── styleguide/         # Design system components
├── theme/              # Theme configuration and tokens
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎨 Design System

CryptoBuzz uses a comprehensive design system with:

- **Typography**: Custom font family (Plus Jakarta Sans)
- **Colors**: Consistent color tokens for theming
- **Components**: Reusable UI components (CryptoText, CryptoButton, etc.)
- **Themes**: Dark and light theme support
- **Shadows**: Consistent elevation and shadow system

## 🔧 Configuration

### Environment Variables

The app uses the CryptoPanic API for news data. The API key is currently hardcoded in the `newsApi.ts` file. For production, consider moving this to environment variables.

### API Configuration

- **Base URL**: `https://cryptopanic.com/api/developer/v2/posts/`
- **Authentication**: Token-based authentication
- **Caching**: 5-minute stale time, 15-minute cache time

## 📱 Available Scripts

- `yarn start` - Start Metro bundler
- `yarn ios` - Run on iOS simulator
- `yarn android` - Run on Android emulator
- `yarn test` - Run test suite
- `yarn lint` - Run ESLint

## 🧪 Testing

The project includes a comprehensive test suite:

```bash
yarn test
```

Tests are organized in the `__tests__` directory and cover:
- Component testing
- Hook testing
- API testing
- Navigation testing
- Redux store testing

## 📦 Dependencies

### Core Dependencies
- React Native 0.80.0
- React Navigation v7
- Zustand (state management)
- React Query (data fetching)
- React Native Paper (UI components)

### Key Libraries
- `@gorhom/bottom-sheet` - Bottom sheet components
- `react-native-mmkv` - Fast storage
- `react-native-reanimated` - Animations
- `react-native-share` - Social sharing
- `react-native-toast-message` - Toast notifications

## 🔄 State Management

The app uses Zustand for state management with MMKV storage for persistence:

- **News Store**: Manages crypto news data and filters
- **Theme Store**: Handles theme switching and preferences
- **Offline Support**: Caches data for offline viewing

## 🌐 API Integration

The app integrates with the CryptoPanic API to fetch cryptocurrency news:

- Real-time news updates
- Filtering by cryptocurrencies
- Filtering by news types
- Error handling and retry logic
- Offline caching

## 📱 Platform Support

- **iOS**: iOS 12.0+
- **Android**: API level 21+ (Android 5.0+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CryptoPanic](https://cryptopanic.com/) for providing the news API
- [React Native](https://reactnative.dev/) community
- [React Navigation](https://reactnavigation.org/) team
- [Zustand](https://github.com/pmndrs/zustand) for state management

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the existing issues
2. Create a new issue with detailed information
3. Include device/OS information and steps to reproduce

---

**Made with ❤️ for the crypto community**
