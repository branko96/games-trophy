import React from "react";
import {
  NativeModules,
  StyleSheet,
  View,
} from "react-native";

import * as Colors from "../styles/Colors";
import * as Spacing from "../styles/Spacing";
import { useTypedSelector } from "../store";
import GamesList from "../components/GamesList";

const { ToastModule } = NativeModules;

const HomeScreen: React.FC = () => {
  const games = useTypedSelector((state) => state.games.games);

  return (
    <View style={styles.background}>
      <GamesList
        games={games}
        onPressGame={(name: string) => ToastModule.show(name, ToastModule.SHORT)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.DARK,
    ...Spacing.largePadding,
  },
});

export default HomeScreen;
