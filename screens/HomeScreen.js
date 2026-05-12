import React from 'react';
import { View, Text, TouchableOpacity, ScrollView,} from 'react-native';
import SONGS from '../data/songs';
import styles from '../style/AppStyle';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎵 รายการเพลง</Text>

      {item.map((song) => (
        <TouchableOpacity
          key={song.id}
          style={[styles.item, { borderLeftColor: song.color }]}
          onPress={() => navigation.navigate('Player', { id: song.id })}
        >
          <Text style={xxxxxxxxxxxx}>{song.emoji}</Text>
          <View style={styles.info}>
            
            titletitletitletitletitletitletitletitle
            artistartistartistartistartistartistartist
            
          </View>
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          <Text style={xxxxxxxxxxxxxx}>▶</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

