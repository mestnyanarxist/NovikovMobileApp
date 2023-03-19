//Подумать, что можно перенести в отдельные файлы для более гибкой настройки

import { gql, useQuery } from '@apollo/client'
import { StyleSheet, View, Text} from 'react-native'

const GET_EVENT = gql`
    query getEvent {
        event(id:10) {
            name,
            source,
            description
        }
    }
`;

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

function DataReturn() {
    const { loading, error, data } = useQuery(GET_EVENT);
    let i = 0;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    const text = data.event.description

    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>
            Результат обращения к серверу:
            </Text>
            <Text>
                {text}
            </Text>   
        </View>             
    )
  }

export const WelcomeScreen = () => {

    const data = useQuery(GET_EVENT);
    console.log(data);

    return (
    <View style={styles.container}>        
        <DataReturn/>  
    </View>
    )
}