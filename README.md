# reactnative
this repository is to build mobile app using react native framework

Before we begin writing code, there are couple of things to check as pre-conditions

1. Node Setup
  a. Debian and Ubuntu based Linux distributions (change setup_6 to setup_8 for Node 8)
      for NodeJs 6: curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - 
      for NodeJs 8: curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - 
      install: sudo apt-get install -y nodejs
  b. Enterprise Linux and Fedora (Including Red Hat® Enterprise Linux® / RHEL, CentOS and Fedora)
      for NodeJs 6: curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
      for NodeJs 6: curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
      install: sudo yum -y install nodejs
note: refer this https://nodejs.org/en/download/package-manager/ for details
2. React Native framework setup
React native framework was made public by Facebook (https://facebook.github.io/react-native/) which is the best place to understand the basic concepts
  a. use npm to install the create-react-native-app command line utility:
    npm install -g create-react-native-app
  b. create-react-native-app <your project name> e.g.: create-react-native-app postafact
	c. cd <<your project name> e.g.: cd postafact
	d. npm start

2. IDE installation
	a. Expo XE Tool (common for android and iOS app) on machine
	Install the Expo client app on your iOS or Android phone and connect to the same wireless network as your computer. Using the Expo app, scan the QR code from your terminal to open your project.
	b. Expo XE client on android and iOS mobile phone
3. Running your app on a simulator or virtual device (Android)
	a. Run Android emulator  or connect real android device  (Android Studi -> Tools -> Android -> AVD Manager -> create one virtual device)
	b. Run app on Android emulator: react-native run-android
4. Running your app on a simulator or virtual device (Android)
	a. Run ios emulator  or connect real ios device 
	b. Run app on ios emulator:		react-native run-ios
