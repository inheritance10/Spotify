import React from "react";
import {Button, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./ListeningMusicListStyle";


const ListeningMusicList = (props) => {
    return(
        <TouchableOpacity style={styles.song_detail_btn}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: props.song.imageUrl}}/>
                <View style={styles.music_name_container}>
                    <Text style={styles.music_name}>
                        {props.song.title}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ListeningMusicList;