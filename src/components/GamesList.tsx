import React from 'react';
import { FlatList } from 'react-native';
import GameCard from './GameCard';
import { Game } from "../types";

interface GamesListProps {
  games: Game[];
  onPressGame: (name: string) => void;
}

const GamesList = ({ games, onPressGame }: GamesListProps) => {
  return (
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item} onPress={onPressGame} />}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
  );
};

export default GamesList;
