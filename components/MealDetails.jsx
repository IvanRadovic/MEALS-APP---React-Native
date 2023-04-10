import { View,Text, StyleSheet } from "react-native";

const MealDetails = ({ duration, complexity, affordability}) => {
    return ( 
        <View style={styles.detailsContainer}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
     );
}
 
export default MealDetails;

const styles = StyleSheet.create({
    detailsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:10
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }
})