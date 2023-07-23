import { StyleSheet, View, StatusBar, Text, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';


export default function RestaurantsScreen () {
    return(
        <>
            <SafeAreaView style={{ flex:1, marginTop: StatusBar.currentHeight}}>
            <View style={styles.search}>
                <Searchbar/>
            </View>
            <View style={styles.list}>
                <RestaurantInfoCard />
            </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    search: {
        padding: 16,
        backgroundColor: "green",
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: "blue",
    } 
  });