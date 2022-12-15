import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header/Header";
import ChoiceTicket from "../components/choiceTicket/ChoiceTicket";
import ListeningMusicList from "../components/ListeningMusicList/ListeningMusicList";
import data_song from '../../data_song.json';

import {useState} from "react";
export default function Main() {
    const [dataSong , setDataSong] = useState(data_song)

    const getListeninMusicList = ({item}) => <ListeningMusicList song={item} />

    return (
        <View style={styles.container}>
            <Header />
            <ChoiceTicket />
            <FlatList showsVerticalScrollIndicator={false} data={dataSong} renderItem={getListeninMusicList} keyExtractor={(item) => item.id} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191414',
    },
});