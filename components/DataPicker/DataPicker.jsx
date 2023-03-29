import { gql, useQuery } from '@apollo/client'

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

