import React,{useState, useEffect} from "react";
import {Text, View} from "react-native";

import styles from "./HeaderStyle";

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.message_day}>
                    Günaydın
                </Text>
                <View style={styles.notification_container}>
                    <Text style={styles.notification_title}>
                        Bildirimler
                    </Text>
                    <Text style={styles.setting_title}>
                        Ayarlar
                    </Text>
                </View>
            </View>
        </View>
    );
}



export default Header;