import React, { Component } from "react";
import {View , ScrollView, Text, TextInput,StyleSheet, StatusBar,
    Dimensions
    } from "react-native";
import Clock from './Clock';

class Pomodro extends React.Component{
    constructor(props){
        super(props);
        this.state={
            workTime:25,
            breakTime:5,
            intervalType:"work",
        }
    }
    handleTimerCompleted=()=>{
        
        if(this.state.intervalType==='work')
        {
            this.setState({
                intervalType:"break"
            })
        }
        else{
            this.setState({
                intervalType:"work"
            })
        }
    }
    handleWorkTime=(text)=>{
        if(text>=0)
        {
            this.setState({
                workTime:text
            })
        }
        else{
            this.setState({
                workTime:25
            })
        }
    }
    handleBreakTime=(text)=>{
        if(text>=0)
        {
            this.setState({
                breakTime:text
            })
        }
        else{
            this.setState({
                breakTime:5
            })
        }
    }
    handleTime=()=>{
        if(this.state.intervalType==='work'){
            return this.state.workTime
        }
        else{
            return this.state.breakTime
        }
    }

    render(){
        let time=this.handleTime()
        return(
            <ScrollView>
            
            <Clock intervalType={this.state.intervalType}
            OnComplete={this.handleTimerCompleted}

            peroid={time}
            />


<View style={styles.time}>
        <Text style={styles.Text}>
          Work Time
        </Text>
      <TextInput  style={styles.input}  keyboardType={"numeric"} defaultValue={" "+ this.state.workTime} 
      onChangeText={this.handleWorkTime}
       />
     
     
     </View>
     <View style={styles.time}>
     <Text style={styles.Text}>
          Break Time
        </Text>
    <TextInput  style={styles.input}  keyboardType={"numeric"} defaultValue={" "+this.state.breakTime} 
      onChangeText={ this.handleBreakTime} placeholder="break in minutes" />
   
      </View>
            </ScrollView>
        )
    }
    
}
export default Pomodro;

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