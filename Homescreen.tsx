import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import ActionButtons from '../components/ActionButtons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <BalanceCard />
      <ActionButtons />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
  },
});
