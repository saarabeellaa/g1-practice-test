import React from 'react';
import { View, Text } from 'react-native';
import { ADMOB_BANNER_UNIT_ID } from '../adConfig';

// Placeholder Banner Component (works in Expo Snack)
export function BannerAdComponent() {
  return (
    <View
      style={{
        backgroundColor: '#f5f5f5',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
      }}
    >
      <Text style={{ color: '#999', fontSize: 12, fontWeight: '600' }}>
        Advertisement
      </Text>
      <Text style={{ color: '#ccc', fontSize: 10, marginTop: 2 }}>
        {ADMOB_BANNER_UNIT_ID}
      </Text>
    </View>
  );
}
