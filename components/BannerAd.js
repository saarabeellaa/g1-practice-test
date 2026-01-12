import React from 'react';
import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export function BannerAdComponent() {
  return (
    <View style={{
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      paddingVertical: 5,
    }}>
      <BannerAd
        unitId={__DEV__ ? TestIds.BANNER : 'ca-app-pub-3990448886293370/4801361884'}
        size={BannerAdSize.SMART_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
        }}
      />
    </View>
  );
}
