import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data'

function FavoritesScreen() {
    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids)

    const favoriteMeals = MEALS.filter((meal) => 
        favoriteMealsIds.includes(meal.id)
    )

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})