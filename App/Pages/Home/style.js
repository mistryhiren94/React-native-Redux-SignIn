import { StyleSheet,Dimensions,Platform } from 'react-native';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var fontcolor='#757575';

export default StyleSheet.create({
  container: {
    height:'100%',
    flexDirection:'column',
    backgroundColor: '#ffffff',
  },
  imagesize_logo:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    backgroundColor: '#453a5a'
  },
  Button_1:{
    backgroundColor:'#0e72fc',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    marginTop:30,
    marginLeft:45,
    marginRight:45,
    borderRadius:5,
    padding:15,

  },
  ButtonText:{
    color:'#ffffff',
    fontSize: 18,
    fontWeight:'500'
  },
  LableText1:{
    color:'#ffffff',
    fontSize: 30,
    textAlign:'center',
  },
  alignLoader: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  alignLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  styleLogout: {
    fontSize: 15,
    color: '#FFF',
    borderBottomColor: '#FFF',
    borderBottomWidth: 2
  }
});
