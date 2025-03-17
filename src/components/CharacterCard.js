import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{character.fullName}</Text>
      <Text style={styles.title}>{character.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#292929",
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    color: "#ccc",
    fontSize: 14,
  },
});

export default CharacterCard;
