import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../src/screens/Spash';
import Home from '../../src/screens/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{  }}>
            <Stack.Screen name='Splash' component={Splash} options={{ title: 'Splash', headerShown: false, }} />
            <Stack.Screen name='Home' component={Home} options={{ title: 'Home', headerShown: false, gestureEnabled: false }} />
        </Stack.Navigator>
    );
}

export default AppNavigator;