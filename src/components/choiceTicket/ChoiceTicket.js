import React from "react";
import {Text, View} from "react-native";
import styles from "./ChoiceTicketStyle";
const ChoiceTicket = () => {
    return(
      <View style={styles.container}>
          <View style={styles.ticket_1_container}>
              <Text style={styles.ticket_1}>
                  Müzik
              </Text>
          </View>
          <View style={styles.ticket_2_container}>
              <Text style={styles.ticket_2}>
                  Podcast'ler ve Programlar
              </Text>
          </View>
      </View>
    );
}


export default ChoiceTicket;