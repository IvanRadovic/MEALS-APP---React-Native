import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";

import MealDetails from "./MealDetails";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();

    const selectMealHandler = () => {
        navigation.navigate('Mealdetail',{
            mealId:id
        });
        
      }
    return ( 
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{ color:'#ccc', }}
                style={({pressed}) => pressed ? styles.buttonPressed : null }
                onPress={selectMealHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri:imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
     );
}
 
export default MealItem;

const styles = StyleSheet.create({
    mealItem:{
        margin:25,
        borderRadius:10,
        backgroundColor:'white',
        overflow:'hidden',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width: 0, height:2},
        shadowRadius:5,
        overflow:Platform.select({ios:'visible', android:'hidden'})
    },
    buttonPressed:{
        opacity:0.8
    },
    innerContainer:{
        borderRadius:10,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:10
    },
    
})