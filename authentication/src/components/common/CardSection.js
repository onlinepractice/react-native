import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { CSstyle } = styles;
return (
<View style={CSstyle}>
  {props.children}
  </View>
);
};
const styles = {
  CSstyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'

  }

};
export { CardSection };
