import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { View, Text } from 'react-native';
import { styles } from '../../Styles/ScreenStyle'

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
};

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
    const [loadEvent, { loading, error, data}] = useLazyQuery(GET_EVENT_DATE)
    
    const handleConfirmDatePicker = (value) => {
       
        console.log(value)
               
        loadEvent({
            variables: {
                year: Number(value[0]),
                month:  Number(value[1]),
                day:  Number(value[2]),
            },            
        });         
    };    

    console.log(data)   

    function LoadFun(){
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        
        if(data != null ) return data.eventDate.map((item, index) =>{
            return (
            <Text key = {index} style={{paddingBottom: 20}}>
                {item.description}
            </Text>
            )
        }) 
               
    }   

    return(
        <View>
          <DatePicker onConfirm={handleConfirmDatePicker}/>
          <Text style={{fontWeight: 'bold', paddingTop: 5}}> Ответ с сервера: </Text>
          <LoadFun/>    
        </View>                      
    );
};