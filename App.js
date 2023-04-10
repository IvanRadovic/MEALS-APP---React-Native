import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'#278cb6'},
            headerTintColor:'white',
            contentStyle:{backgroundColor:'#ceeeed'}
          }} 
        >
          <Stack.Screen 
            name='Meals Cateogries' 
            component={CategoriesScreen} 
          />
          <Stack.Screen 
            name="Meals Overview" 
            component={MealsOverviewScreen} 
            // options= {({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return{
            //     title:catId
            //   }
            // }}
          />
          <Stack.Screen
            name='Mealdetail'
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
