import { styles } from '../../Styles/ScreenStyle'
import { View } from 'react-native'
import { DataReturn } from '../../components/DataParcer'

export const WelcomeScreen = () => {

    return (
    <View style={styles.container}>      
       <DataReturn/>
    </View>
    )
}