import {StyleSheet, Dimensions} from 'react-native';

const {width: winWidth, height: winHeight} = Dimensions.get('window');

export default {
  text: {
    alignSelf: 'center',
    marginBottom: 7,
  },
  mb: {
    marginBottom: 15,
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
