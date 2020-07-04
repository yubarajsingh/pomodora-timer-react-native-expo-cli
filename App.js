import React from "react";
import {  Text, View ,StyleSheet} from "react-native";
import Header from "./Header";

import Pomodro from "./Pomodro";

// import Footer from "./Footer";

class App extends React.Component {
 
   render() {
       return (
      <View>
        <Header />
       <Pomodro />
      </View>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  
  toplevel: {
    alignItems:"center",
    justifyContent:"center",
    fontSize:50,
    color:'white',
    },

  circle:{
    
    width:250,
    height:250,
    borderRadius:250/2,
    backgroundColor:"grey",
    borderColor:'skyblue',
    borderWidth:2,
    alignItems:"center",
    justifyContent:"center",
        
  }
  ,
  Text:{
    alignItems:"center",
    justifyContent:"center",
    fontSize:25,
    fontWeight:"bold", 
    paddingRight:10
    },
    input:{
      height: 40,width:100, borderColor: 'gray', borderWidth: 1,fontWeight:"bold"
      ,textAlign:"center"
    }
    ,
    time:{
      flexDirection:"row",
      alignContent:"center",
    justifyContent:"center",
    padding:10
    }
});