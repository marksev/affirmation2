import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import type { AffirmationCategory } from '../data/affirmationData';

interface AffirmationViewerProps {
  category: AffirmationCategory;
  onBack: () => void;
}

const { width } = Dimensions.get('window');

const AffirmationViewer: React.FC<AffirmationViewerProps> = ({ category, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAffirmation = () => {
    if (currentIndex < category.affirmations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevAffirmation = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          <Text style={styles.counter}>
            {currentIndex + 1} of {category.affirmations.length}
          </Text>
        </View>

        <View style={styles.affirmationContainer}>
          <View style={styles.affirmationCard}>
            <Text style={styles.affirmationText}>
              {category.affirmations[currentIndex]}
            </Text>
          </View>
        </View>

        <View style={styles.navigationControls}>
          <TouchableOpacity
            style={[
              styles.navButton,
              currentIndex === 0 && styles.navButtonDisabled,
            ]}
            onPress={prevAffirmation}
            disabled={currentIndex === 0}
          >
            <Text
              style={[
                styles.navButtonText,
                currentIndex === 0 && styles.navButtonTextDisabled,
              ]}
            >
              ← Previous
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navButton,
              currentIndex === category.affirmations.length - 1 && styles.navButtonDisabled,
            ]}
            onPress={nextAffirmation}
            disabled={currentIndex === category.affirmations.length - 1}
          >
            <Text
              style={[
                styles.navButtonText,
                currentIndex === category.affirmations.length - 1 && styles.navButtonTextDisabled,
              ]}
            >
              Next →
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  counter: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  affirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  affirmationCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 40,
    width: width - 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 10,
  },
  affirmationText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333333',
    lineHeight: 28,
    textAlign: 'center',
  },
  navigationControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    minWidth: 120,
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  navButtonTextDisabled: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
});

export default AffirmationViewer;