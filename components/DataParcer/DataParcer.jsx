import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { View, Text } from 'react-native';

import { DatePicker } from '../../components/DatePicker';

//Получение данных текстом
const GET_EVENT = gql`
    query getEvent {
        event(id:10) {
            name,
            source,
            description
        }
    }
`;

export function DataReturn() {
    const { loading, error, data } = useQuery(GET_EVENT);
    let i = 0;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    const text = data.event.description;

    console.log(text);

    return ( 
        <View>
            <Text style={{fontWeight: 'bold'}}>
                Результат обращения к серверу:                    
            </Text>
            <Text style={{fontWeight: 'normal'}}>
                {text}
            </Text>    
        </View>
    )
  }

//Получение данных через DatePicker
const GET_EVENT_DATE = gql`
  query getEventDate($year: Int, $month: Int, $day: Int) {
    eventDate(year: $year, month: $month, day: $day) {
        name
        description
    }
  }
`;

export const DateSelect = () => {
    const [loadEvent, { loading, data }] = useLazyQuery(GET_EVENT_DATE);
 
    const handleConfirmDatePicker = (value) => {
        loadEvent({
            variables: {
                year: value,
                month: value,
                day: value,
            },
        });
    };

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const text = data.event.description;

    return(
        <View>
            <DatePicker onConfirm={handleConfirmDatePicker}/>
            {text}
        </View>
    );
};