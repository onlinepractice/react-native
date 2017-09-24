import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spin = ({ size }) => {
  const { SStyle } = styles;
  return (
    <View style={SStyle}>
     <ActivityIndicator size={size || 'large'} />
    </View>
  );
};
const styles = {
  SStyle: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'

  }
};
export { Spin };
