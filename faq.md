
$ react-native run-android
Error:
JS server not recognized, continuing with build...
Building and installing the app on the device (cd android && ./gradlew installDebug)...
Could not install the app on the device, read the error above for details.
Make sure you have an Android emulator running or a device connected and have
set up your Android development environment:
https://facebook.github.io/react-native/docs/android-setup.html
Resolution#1
run these commands manually
cd android
./gradlew installDebug
if you get the erorr "-bash: ./gradlew: Permission denied", check the permissions on the file gradlew
chmod 755 gradlew
