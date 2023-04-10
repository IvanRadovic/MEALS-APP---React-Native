import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({children}) => {
    return ( 
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
     );
}
 
export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#24180f',
        textAlign:'center',
    },
    subtitleContainer:{
        padding:7,
        marginHorizontal:12,
        marginVertical:5,
        borderBottomColor:'#24180f',
        borderBottomWidth:2,
    },
})