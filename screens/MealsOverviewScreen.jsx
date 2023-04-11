import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;


    /* -- Filter for meals -- */
    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    });


    /* -- For showing title on every category screen -- */
    // useLayoutEffect becaouse the title is not rendering in same tame as page
    useLayoutEffect(() => { 
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title:categoryTitle
        })
      
    }, [catId, navigation])

   

    return <MealsList items={displayedMeals} />
}
 
export default MealsOverviewScreen;


