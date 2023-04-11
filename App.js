import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavortiesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator () {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:'#278cb6'},
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:'#ceeeed'},
      drawerContentStyle:{backgroundColor:'#278cb6'},
      drawerActiveTintColor:'white',
      drawerActiveTintColor:'skyblue',
      
      }} >
        <Drawer.Screen 
          name='Categories' 
          component={CategoriesScreen}
          options={{
            title:'All Categories',
            drawerIcon:({ color, size }) => (
              <Ionicons name='list' color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen 
          name='Favorites' 
          component={FavortiesScreen}
          options={{
            drawerIcon:({ color, size }) => (
              <Ionicons name='star' color={color} size={size} />
            )
          }}
        />
    </Drawer.Navigator>
    )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerStyle:{backgroundColor:'#278cb6'},
              headerTintColor:'white',
              contentStyle:{backgroundColor:'#ceeeed'}
            }} 
          >
            <Stack.Screen 
              name='AllCateg' 
              component={DrawerNavigator} 
              options={{
                title:'All headers',
                headerShown:false
              }}
            />
            <Stack.Screen 
              name="Meals Overview" 
              component={MealsOverviewScreen} 
            />
            <Stack.Screen
              name='Mealdetail'
              component={MealDetailsScreen}
              options={{
                title:'Meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
