import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import CategoryCard from './src/components/CategoryCard';
import AffirmationViewer from './src/components/AffirmationViewer';
import { affirmationCategories, type AffirmationCategory } from './src/data/affirmationData';

function App(): React.JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<AffirmationCategory | null>(null);

  const handleCategorySelect = (category: AffirmationCategory) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    return (
      <AffirmationViewer 
        category={selectedCategory} 
        onBack={handleBack} 
      />
    );
  }

  const renderCategory = ({ item }: { item: AffirmationCategory }) => (
    <CategoryCard
      category={item}
      onPress={() => handleCategorySelect(item)}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#667eea"
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Affirmation Categories</Text>
          <Text style={styles.subtitle}>Choose a category to explore positive affirmations</Text>
        </View>
        
        <FlatList
          data={affirmationCategories}
          renderItem={renderCategory}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  grid: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
});

export default App;
