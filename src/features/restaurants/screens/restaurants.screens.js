import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import { SafeArea } from '../../../components/utility/safe-area.component';


const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

export default function RestaurantsScreen () {
    return(
        <>
            <SafeArea>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
                <RestaurantList 
                    data={[{ name: 1}, { name: 2}, { name: 3}, { name: 4}, { name: 5}]}
                    renderItem={() => <RestaurantInfoCard />}
                    keyExtractor={(item) => item.name}
                />
            </SafeArea>
        </>
    )
}

