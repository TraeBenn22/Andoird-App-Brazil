import {StyleSheet, Dimensions} from 'react-native';

const {width: winWidth, height: winHeight} = Dimensions.get('window');

export default {
  container: {
    backgroundColor: '#F7F8FC',
  },
  pixeLogo: {
    color: '#0D0D0D',
  },
  menu: {
    color: '#0D0D0D',
  },
  header: {
    backgroundColor: '#FCFEFF',
    borderBottomColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#D9D9D9',
    borderBottomWidth: 0,
    shadowColor: '#3f3e40',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 10,
  },

  footer: {
    bottom: 0,
    backgroundColor: '#FCFEFF',
    borderRadius: 2,
    borderColor: '#D9D9D9',
    borderTopWidth: 1,
    marginTop: 10,
  },
};
