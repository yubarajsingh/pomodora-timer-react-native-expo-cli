import React from "react";
import {View , ScrollView, Text, TextInput,StyleSheet, StatusBar,
Dimensions,
Vibration
} from "react-native";
import WorkTime from "./workTime";
import Labels from "./Labels";
import Timer from "./Timer";
class Clock extends React.Component {
  constructor(props){
    super(props),
    this.state=({
     
     
      paused: false,
      playing: false,
      break:false,
      reset:false,
      time:this.props.peroid*60,
    })
    
  }
  componentWillReceiveProps(nextProps){
    this.setState({playing:false,time:nextProps.peroid*60});
    if(this.state.playing===true && this.state.time==0){
      this.handlePlay()
    }
  }
  componentDidUpdate(){
    if(this.state.playing===true && this.state.time==0){
        clearInterval(this.timerId)
        Vibration.vibrate([500,500,500])
        this.props.OnComplete()
    }
    else if(this.state.playing===false){
      clearInterval(this.timerId)
    }
  }

  handlePlay=()=>{
    this.setState({
      playing:true
    })
    this.timerId=setInterval(()=>{
      this.setState({
        time:this.state.time -1
      })
    },1000)
  } 

  handlePause=()=>{
    clearInterval(this.timerId)
    this.setState({
      
        playing:false
      
    })
  } 
  
handleReset=()=>{
  clearInterval(this.timerId)
  this.setState({
    playing:false,
    time:this.props.peroid*60,
  })
}


  render() {
    
    return (
      
     <ScrollView>
       <WorkTime  playing={this.state.playing} intervalType={this.props.intervalType}/>
      <Timer  peroid={this.state.time} />
     
      <Labels 
      working={this.state.working} 
      playing={this.state.playing} 
      playClicked={this.handlePlay} 
      paused={this.handlePause} 
      reset={this.handleReset }/>    

      
      
    </ScrollView>  
    );
  }
}

export default Clock;

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