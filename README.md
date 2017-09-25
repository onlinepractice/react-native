
## react-native
this repository is to build mobile app using react native framework. Each project within this repository will be treated as independent project so that teams can work without issues. There will be another project to consolidate the code at later stage.

This repository contains react native code as set of projects like authentication.

## Pre-requisits
1. Install Android SDK (either install Android Studio or just the sdk)
2. If you don't want to use Android Studio, Install Atom
3. Install Nuclide pakcage on Atom for debugging. 
4. Install Xocde for iOS devices. 
5. Enable development mode in the mobile device. 
note: Refer wiki pages for more details


## Installation

In simple way, try this from your terminal:
1. export ANDROID_HOME= /usr/local/Android/sdk
2. git clone https://github.com/onlinepractice/react-native
3. check the android sdk location in Android Studio -> SDK Manager and make appropriate changes.
4. Check the file local.properties under anroid folder and make appropriate changes for the line sdk.dir=/usr/local/Android/sdk.
note: *refer wiki page for more detail.s

## Usage
1. go to <project location>
### If you want to run it manually, follow these steps
1.1. run 'npm install'
1.2. run 'react-native run-andoird' for android device
1.3. run 'react-native run-andoird' for iOS device
###If you want to use npm, run npm run-script <script name>
Scripts available in authentication via `npm run-script`:
  set-env
    . environment.sh
  run-android
    npm install && react-native run-android
  run-android-with-bundle
    react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res npm install && && react-native run-android
  run-ios
    npm install && react-native run-ios

## Contributors
1. Sanjeev Vaishya
2. Piyush Gupta
