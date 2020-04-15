import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

type ContentProps = {
  text: string;
  backgroundColor: string;
  actions: {onPress: () => void; text: string}[];
};

const Content: React.FC<ContentProps> = ({text, backgroundColor, actions}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text>{text}</Text>
      {actions.map(({onPress, text: buttonText}, i) => (
        <TouchableHighlight key={i} onPress={onPress}>
          <Text>{buttonText}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

type Routes = {
  Home: undefined;
  Other: undefined;
  Modal: undefined;
};

type ScreenProps = {
  navigation: StackNavigationProp<Routes>;
};

export const HomeScreen = ({navigation}: ScreenProps) => (
  <Content
    text="Home"
    backgroundColor="red"
    actions={[
      {
        text: 'Go to modal',
        onPress: () => navigation.navigate('Modal'),
      },
    ]}
  />
);

export const OtherScreen = ({navigation}: ScreenProps) => (
  <Content
    text="Other"
    backgroundColor="blue"
    actions={[
      {
        text: 'Go to modal',
        onPress: () => navigation.navigate('Modal'),
      },
    ]}
  />
);

export const DetailsScreen = ({navigation}: ScreenProps) => (
  <Content
    text="Details"
    backgroundColor="green"
    actions={[
      {
        text: 'Go home',
        onPress: () => navigation.goBack(),
      },
    ]}
  />
);
