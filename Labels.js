import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Ionicons,Feather,MaterialCommunityIcons } from '@expo/vector-icons';
export default class Labels extends React.Component{
   
  

playOrPause=(props)=>{
    if (!this.props.playing){
      return ( 
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.playClicked}><Text style={{color:'white'}}>start{""}
    </Text><Feather style={styles.icon} name="play" size={24} color="white" /></TouchableOpacity>
    </View>)
    }
    else{
       return( 
       <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.paused}><Text style={{color:'white'}}>Pause{""}
    </Text><Feather style={styles.icon} name="pause" size={24} color="white" /></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.props.reset}><Text style={{color:'white'}}>reset{""}
        </Text><MaterialCommunityIcons name="restart" size={28} color="white" /></TouchableOpacity> 
     </View>
   
        )
    }
}
render()
{
    return(
    this.playOrPause()
   );
}
}
const styles=StyleSheet.create({
    container:{
       
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent:"center",
        margin:20,
        
    },
    button: {

      
        padding:25,
        alignItems:"center",
        alignContent:"center",
        backgroundColor:"grey",
        width: "30%",
        height: 40,
       flexDirection:'row',
      }
      ,
     
})