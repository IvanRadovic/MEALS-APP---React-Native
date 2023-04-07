import { View, Text, StyleSheet } from "react-native";

const MealItem = ({title}) => {
    return ( 
        <View>
            <Text>{title}</Text>
        </View>
     );
}
 
export default MealItem;

const styles = StyleSheet.create({
    screen:{
        flex:1
    }
})