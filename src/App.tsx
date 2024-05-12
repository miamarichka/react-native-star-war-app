import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {routes.map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component as React.ComponentType<any>}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
export default App;
