# Movie Test App

A React Native application for browsing and discovering movies.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Screenshots](#screenshots)
- [Todo List](#todo-list)

## Installation

### Prerequisites

- Node.js (v14 or newer)
- Yarn
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

### Install Dependencies

Clone the repository and install dependencies:

```bash
# Clone the repo
git clone <repository-url>
cd movieTest

# Install JavaScript dependencies
yarn install
```

### iOS Setup

Install CocoaPods (if not already installed):

```bash
sudo gem install cocoapods
```

Or if you're using a Ruby version manager like rbenv:

```bash
gem install cocoapods
```

**Important**: You must install pods for iOS development to work:

```bash
# Navigate to the iOS directory
cd ios

# Install pod dependencies
pod install

# Return to the project root
cd ..
```

> ⚠️ Always run `pod install` after pulling new changes or updating JavaScript dependencies that include native iOS code.

### Android Setup

No additional steps required after installing the JavaScript dependencies.

## Running the App

### iOS

```bash
# Start the Metro bundler
yarn start

# In another terminal, run the iOS app
yarn ios
```

### Android

```bash
# Start the Metro bundler
yarn start

# In another terminal, run the Android app
yarn android
```

## Screenshots

### iOS

<img src="screenshots/ios-home.png" width="250" alt="iOS Home Screen">
<img src="screenshots/ios-details.png" width="250" alt="iOS Details Screen">

### Android

<img src="screenshots/android-home.png" width="250" alt="Android Home Screen">
<img src="screenshots/android-details.png" width="250" alt="Android Details Screen">

## Todo List

- [ ] Create movie listing screen
- [ ] Implement movie details screen
- [ ] Add search functionality
- [ ] Integrate with movie API
- [ ] Implement favorites feature
- [ ] Add user authentication
- [ ] Create settings screen
- [ ] Implement dark mode
- [ ] Add offline support
- [ ] Implement deep linking

## License

This project is licensed under the MIT License - see the LICENSE file for details.
