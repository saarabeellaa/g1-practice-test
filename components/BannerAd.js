import React from 'react';
import { View, Text } from 'react-native';

export function BannerAdComponent() {
  return (
    <View style={{
      backgroundColor: '#f5f5f5',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    }}>
      <Text style={{ color: '#999', fontSize: 12, fontWeight: '600' }}>
        Advertisement
      </Text>
    </View>
  );
}
