import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { CategoryCard } from '../components/CategoryCard';
import { affirmationCategories } from '../data/affirmationData';
import { AffirmationCategory } from '../types';

type RootStackParamList = {
  Home: undefined;
  AffirmationViewer: { category: AffirmationCategory };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleCategoryPress = (category: AffirmationCategory) => {
    navigation.navigate('AffirmationViewer', { category });
  };

  const renderCategory = ({ item }: { item: AffirmationCategory }) => (
    <CategoryCard
      category={item}
      onPress={() => handleCategoryPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.title}>Affirmation Categories</Text>
          <FlatList
            data={affirmationCategories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.name}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
});