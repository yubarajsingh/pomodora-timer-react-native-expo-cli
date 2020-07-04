import React from 'react';
import { View, ScrollView, Text, Button ,StyleSheet, StatusBar,
    Dimensions
    } from "react-native";


export default class workTime extends React.Component{

renderElement=(props)=>{
    if(this.props.intervalType === "work")
    {
        return ( <View >
            <Text style={styles.working}>
      lets do  Work{"-----"}
    </Text>
    </View>)}
    else{
        return(<View >
            
        <Text style={styles.resting}>Resting  Time{" ----"}</Text>
        </View>)
    }
    
}
   
render(){
    return(
       this.renderElement()
        );
}
}
const styles = StyleSheet.create({
        resting: {
    alignContent:"center",
      padding: 5,
      
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color:"red",
    },
    working: {
        alignContent:"center",
          padding: 5,
          
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          color:"green",
        },
  });