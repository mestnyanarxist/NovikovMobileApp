import { styles } from '../../Styles/ScreenStyle'
import { DataReturn } from '../../components/DataParcer'

export const WelcomeScreen = () => {

    return (
    <View style={styles.container}>      
        <Text style={{fontWeight: 'bold'}}>
            Результат обращения к серверу:                    
        </Text>
        <Text style={{fontWeight: 'normal'}}>
                {DataReturn()}</Text>    
    </View>
    )
}