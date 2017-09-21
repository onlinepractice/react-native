#!/bin/bash
#call environment script once
./environment.sh
#create folder assets under android/src/main folder, if it does not exist
if (~ find -f $PROJECT_ROOT/android/src/main/assets) then
  mkdir assets
fi
#run the path for the issue unable to load script from assets index.android.bundle
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest  android/app/src/main/res
#run the command to start the react native app on android phone or emulator
react-native run-android
