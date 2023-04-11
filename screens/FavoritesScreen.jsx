import { StyleSheet, View, Text } from "react-native";
import { useContext } from "react";
import MealsList from "../components/MealList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavortiesScreen = () => {

    const favoritesMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoritesMealsCtx.ids.includes(meal.id))

    if(favoriteMeals.length === 0) {
        return(
            <View style={styles.root}>
                <Text style={styles.text}>You have no favorites meals yet!</Text>
            </View>
        )
    }

    return ( 
        <MealsList items={favoriteMeals} />
     );
}
 
export default FavortiesScreen;

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    }

})