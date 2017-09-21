Run these commands if not installed
  brew install node
  brew install watchman (Watchman is a tool by Facebook for watching changes in the filesystem)
  npm install -g react-native-cli (React Native command line interface)
  Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app. 
  The easiest way to install Xcode is via the Mac App Store
  Xcode Command Line Tools: Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and  install the tools by selecting the most recent version in the Command Line Tools dropdown.
  react-native init <your project name>
  cd <your project name>
  react-native run-ios
  
  
Steps to setup adb in MAC for android phone or emulator
  Install adb
  brew cask install android-platform-tools
  Start using adb
  adb devices

