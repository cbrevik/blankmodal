# react-navigation bug with react-native-screens

With `enableScreens()` and nested `Navigator`s the parent screen which opens the modal screen will go blank after `goBack()` on Android.

Seems to be dependent on the Modal-screen also wrapping a `Navigator` - and the Root-stack needs to be `mode="modal"`.

The same happens when using a bottom tabs `Navigator` for the nested parent screen.
