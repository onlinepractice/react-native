Application main has not been registered.

Hint: This error often happens when you're running the packager (local dev server) from a wrong folder. For example you have multiple apps and the packager is still running for the app you were working on before.
If this is the case, simply kill the old packager instance (e.g. close the packager terminal window) and start the packager in the correct app folder (e.g. cd into app folder and run 'npm start').

This error can also happen due to a require() error during initialization or failure to call AppRegistry.registerComponent.


runApplication
    AppRegistry.js:177:6
__callFunction
    MessageQueue.js:306:47
<unknown>
    MessageQueue.js:108:26
__guard
    MessageQueue.js:269:6
callFunctionReturnFlushedQueue
    MessageQueue.js:107:17
