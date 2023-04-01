import { styles } from '../../Styles/ScreenStyle'
import { View } from 'react-native'
import { DataReturn } from '../../components/DataParcer'
import { Button } from 'antd-mobile'
import { SelectEventScreen } from '../../screens/SelectEventScreen';

const Lab2 = SelectEventScreen

export const WelcomeScreen = ({navigation}) => {
    return (
    <View style={styles.container}>
        <DataReturn />
        <br></br>
        <Button 
            title="Go to Lab2" 
            onClick={() => navigation.navigate('Lab2')}
            style={{fontWeight: 'bold'}}
            >
        Go to lab 2        
       </Button>
    </View>    
    )    
}