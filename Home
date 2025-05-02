import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymobileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Paymobile</Text>
          <Text style={styles.subTitle}>Full Name</Text>
        </View>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} // Placeholder image
          style={styles.avatar}
        />
      </View>

      {/* Balance Box */}
      <View style={styles.balanceBox}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>Rp. 30,000,000,00</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={32} color="#0096FF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#0096FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymobileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#555',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  balanceBox: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#999',
    alignItems: 'center',
  },
  balanceLabel: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: '#0096FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});
