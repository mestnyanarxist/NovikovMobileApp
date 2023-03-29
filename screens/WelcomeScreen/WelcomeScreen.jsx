import { StyleSheet, View, Text} from 'react-native'
import { DataReturn } from '../../components/DataPicker'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        textDecorationColor: 'black',
        fontWeight: 'italic',
        textAlign: 'center',
    }
})

export const WelcomeScreen = () => {

    return (
    <View style={styles.container}>        
        <DataReturn/>  
    </View>
    )
}