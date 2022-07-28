import { Text } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled8 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 0,
      top: 0,
      position: "absolute",
      height: 103,
      width: 197,
      backgroundColor: "#ffddf2",
      borderRadius: 0,
      color: "#777777"
    }}></View><View style={{
      left: 66,
      top: 59,
      position: "absolute",
      height: 60,
      width: 60,
      backgroundColor: "#aae9df",
      borderRadius: "50%",
      color: "#777777"
    }}></View><TextInput style={{
      left: 23,
      top: 149,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} placeholder="John Doe"></TextInput><Text style={{
      left: 23,
      top: 128,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Name
    </Text><Text style={{
      left: 23,
      top: 188,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>DOB</Text><TextInput style={{
      left: 23,
      top: 209,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} placeholder="YYYY-MM-DD"></TextInput><View style={{
      left: 21,
      top: 296,
      position: "absolute",
      height: 25,
      width: 140,
      backgroundColor: "#000000",
      borderRadius: 8,
      color: "#777777"
    }}></View><Text style={{
      position: "absolute",
      left: 36,
      top: 309,
      width: 122,
      height: 24,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center",
      color: "#ffffff"
    }}>Save</Text></View>;
};

export default Untitled8;