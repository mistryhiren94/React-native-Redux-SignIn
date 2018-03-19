import { StyleSheet,Dimensions,Platform } from 'react-native';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var fontcolor='#757575';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%'
	},
	footerButtonContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: null
  },
  nextButton: {
    fontSize: 18,
    color: '#453a5a'
  }
});
