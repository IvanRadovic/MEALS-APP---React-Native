import { useContext, useLayoutEffect } from "react";
import { View,Text, Image, StyleSheet, ScrollView, Button } from "react-native";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailsScreen = ({ route, navigation }) => {

    const favoritesMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;
    
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealsIsFavorite = favoritesMealsCtx.ids.includes(mealId);


    /* -- Making meal favorite --  */
    const changeFavoritesStatusHandler = () => {
      if(mealsIsFavorite){
        favoritesMealsCtx.removeFavorite(mealId);
      }else{
        favoritesMealsCtx.addFavorite(mealId);
      }
    }


    /* --- Set IconButton to the header ---  */
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
            return (
                <IconButton 
                    icon={mealsIsFavorite ? 'star' : 'star-outline'} 
                    color='white' 
                    onPress={changeFavoritesStatusHandler}
                />
            )
        }});
    }, [navigation, changeFavoritesStatusHandler])


    return ( 
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri:selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability} 
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                        <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
     );
}
 
export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image:{
        width:'100%',
        height:350
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:10,
        textAlign:'center',
        padding:10
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        width:'80%'
    }
   
})