import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    song_detail_btn:{
        /*flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'*/
    },
   container:{
       //flexBasis: '50%',
       flexDirection: "row",
       margin: 10,
       backgroundColor: '#rgb(32,33,36)',
       borderRadius: 8
   },
    music_name_container:{
       alignSelf: "center",
        marginLeft: 8
    },
    music_name:{
       color: '#fff'
    },
    image:{
        width:50,
        height:50,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    },
});

export default styles;