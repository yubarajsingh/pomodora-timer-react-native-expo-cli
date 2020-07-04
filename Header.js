import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.toplevel}>Pomodora Timer</Text>
      </View>
    );
  }
}
export default Header;
const styles = StyleSheet.create({
  toplevel: {
    alignContent:"center",
    textAlign:"center",
 
    marginTop:StatusBar.currentHeight,
    
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    
    backgroundColor:"grey",
 
    
  },
});
