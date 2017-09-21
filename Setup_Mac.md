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
  
  
Steps to setup adb in MAC for android phone or emulator (auto setup using brew)
  Install adb
  brew cask install android-platform-tools
  Start using adb
  adb devices

Manually (just the platform tools)
This is the easiest way to get a manual installation of ADB and Fastboot.

Delete your old installation (optional)
rm -rf ~/.android-sdk-macosx/
Navigate to https://developer.android.com/studio/releases/platform-tools.html and click on the SDK Platform-Tools for Mac link.
Go to your Downloads folder
cd ~/Downloads/
Unzip the tools you downloaded
unzip platform-tools-latest*.zip 
Move them somewhere you won't accidentally delete them
mkdir ~/.android-sdk-macosx
mv platform-tools/ ~/.android-sdk-macosx/platform-tools
Add platform-tools to your path
echo 'export PATH=$PATH:~/.android-sdk-macosx/platform-tools/' >> ~/.bash_profile
Refresh your bash profile (or restart your terminal app)
source ~/.bash_profile
Start using adb
adb devices
Option 3 - Manually (with SDK Manager)

Delete your old installation (optional)
rm -rf ~/.android-sdk-macosx/
Download the Mac SDK Tools from the Android developer site under "Get just the command line tools". Make sure you save them to your Downloads folder.
Go to your Downloads folder
cd ~/Downloads/
Unzip the tools you downloaded
unzip tools_r*-macosx.zip 
Move them somewhere you won't accidentally delete them
mkdir ~/.android-sdk-macosx
mv tools/ ~/.android-sdk-macosx/tools
Run the SDK Manager
sh ~/.android-sdk-macosx/tools/android
Uncheck everything but Android SDK Platform-tools (optional)
enter image description here

Click Install Packages, accept licenses, click Install. Close the SDK Manager window.
enter image description here

Add platform-tools to your path
echo 'export PATH=$PATH:~/.android-sdk-macosx/platform-tools/' >> ~/.bash_profile
Refresh your bash profile (or restart your terminal app)
source ~/.bash_profile
Start using adb
adb devices
