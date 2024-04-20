import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import cadastro from './src/Pages/cadastro';
import home from './src/Pages/home';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='home'>

        <Stack.Screen name="home" component={home}/>
        <Stack.Screen name="cadastro" component={cadastro}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}