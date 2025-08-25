import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import type { AffirmationCategory } from '../data/affirmationData';

interface CategoryCardProps {
  category: AffirmationCategory;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        <Text style={styles.categoryName}>{category.name}</Text>
        <Text style={styles.categoryDescription}>{category.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    flex: 1,
    minHeight: 120,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 8,
  },
  categoryDescription: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default CategoryCard;