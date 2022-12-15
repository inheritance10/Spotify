import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
   container:{
       flexDirection: "row",
      marginTop: 15,
      marginLeft: 15,
      marginRight: 10
   },
   header_container:{
       flex:1,
   },
    notification_container:{
       marginBottom: 15,
        alignSelf:"flex-end",
       flexDirection: "row",
        padding: 8
   },
    notification_title:{
      color: '#fff',
        marginRight: 10
    },
    setting_title:{
      color: '#fff'
    },
   message_day:{
       fontWeight: "bold",
       fontSize: 18,
       padding:10,
      color : '#fff',
   }
});

export default styles;