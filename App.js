import React from 'react'
import { View, Text } from 'react-native'
import Config from "react-native-config";

const App = () => {
  const isProduction = Config.PRODUCTION === 'true';
  return (
    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '500' }}>React Native Base</Text>
      <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 20 }}>
        Running {!!isProduction ? 'Production' : 'Staging'} flavour
      </Text>
    </View>
  )
}

export default App
