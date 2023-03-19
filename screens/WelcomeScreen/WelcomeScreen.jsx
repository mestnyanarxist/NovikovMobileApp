import {gql, useQuery } from '@apollo/client'
import {View, Text} from 'react-native'

const GET_EVENT = gql`
    query getEvent {
        event(id: 10){
            name,
            source,
            description
        }
    }
`;

export const WelcomeScreen = () => {

    const data = useQuery(GET_EVENT);

    console.log(data);

    return <View>
        <Text>{data}</Text>
    </View>
}