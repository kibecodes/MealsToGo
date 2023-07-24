import { StatusBar, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`

export default function RestaurantsScreen () {
    return(
        <>
            <SafeArea>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard />
            </RestaurantListContainer>
            </SafeArea>
        </>
    )
}

