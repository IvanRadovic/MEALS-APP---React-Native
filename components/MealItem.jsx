import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
    return ( 
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{ color:'#ccc', }}
                style={({pressed}) => pressed ? styles.buttonPressed : null }

            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri:imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
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