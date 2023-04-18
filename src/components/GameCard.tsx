import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Game} from "../types";

interface GameCardProps {
  game: Game
  onPress: (name: string) => void
}

const GameCard = ({ game, onPress }: GameCardProps) => {
  const { title, highlightsSupported, fullyOptimized, steamUrl, publisher, genre, status } = game;
  const match = steamUrl?.match(/(\d+)/)
  const appId = match ? match[0] : '';
  const imageUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg`;


  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>Publisher: {publisher}</Text>
      <Text style={styles.details}>Genre: {genre}</Text>
      <Text style={styles.details}>Status: {status}</Text>
      <Text style={styles.details}>Highlights Supported: {highlightsSupported ? 'Yes' : 'No'}</Text>
      <Text style={styles.details}>Fully Optimized: {fullyOptimized ? 'Yes' : 'No'}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onPress(title)}>
        <Text style={styles.buttonText}>View game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#1DB954',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default GameCard;
