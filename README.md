# react-navigation bug with react-native-screens

With `enableScreens()` and nested `Navigator`s the parent screen which opens the modal screen will go blank after `goBack()` on Android. If `enableScreens()` is removed, the bug goes away.

Seems to be dependent on the Modal-screen also wrapping a `Navigator` - and the Root-stack needs to be `mode="modal"`.

The same happens when using a bottom tabs `Navigator` for the nested parent screen.

See [App.tsx](./App.tsx) for the Navigation-setup. [Screens.tsx](./Screens.tsx) has the screen-components.
