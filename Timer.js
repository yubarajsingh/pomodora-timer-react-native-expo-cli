import React, { Component } from 'react';
import {Text,View,StyleSheet,StatusBar,Dimensions} from 'react-native';

 class Timer extends Component{
   
   
    render()
    {
        return(
          <View style={{alignItems:"center"}}>
            <View style={styles.circle}>
     
     <Text style={styles.toplevel}>{Math.floor(this.props.peroid / 60)
            .toString()
            .padStart(2, "0") +
            ":" +
            (this.props.peroid % 60).toString().padStart(2, "0")}</Text>
          </View>
            
      </View>
  
        )
    }
}
const styles = StyleSheet.create({
  
    toplevel: {
      textAlign:"center",
      fontSize:50,
      color:'white',

      
      },
  
    circle:{
      alignItems:"center",
      justifyContent:"center",
      width:250,
      height:250,
      borderRadius:250/2,
      backgroundColor:"#04d9ff",
      borderColor:'skyblue',
      borderWidth:2,
      
          
    }
    ,
    Text:{
      alignItems:"center",
      justifyContent:"center",
      fontSize:25,
      fontWeight:"bold",
     
      
      
    }
  });
  export default Timer;