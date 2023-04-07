import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId;


    /* -- Filter for meals -- */
    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    });

    /* -- Show MealItem data */
    const renderMealItem = (itemData) => {
      return <MealItem title={itemData.item.title} />
    }

    return ( 
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                numColumns={2}
            />
        </View>
     );
}
 
export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})

