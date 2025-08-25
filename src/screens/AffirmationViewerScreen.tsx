import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { AffirmationCategory } from '../types';

type RootStackParamList = {
  Home: undefined;
  AffirmationViewer: { category: AffirmationCategory };
};

type AffirmationViewerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AffirmationViewer'
>;

type AffirmationViewerScreenRouteProp = RouteProp<
  RootStackParamList,
  'AffirmationViewer'
>;

interface AffirmationViewerScreenProps {
  navigation: AffirmationViewerScreenNavigationProp;
  route: AffirmationViewerScreenRouteProp;
}

const { width } = Dimensions.get('window');

export const AffirmationViewerScreen: React.FC<AffirmationViewerScreenProps> = ({
  navigation,
  route,
}) => {
  const { category } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderAffirmation = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.affirmationContainer}>
      <View style={styles.affirmationCard}>
        <Text style={styles.affirmationText}>{item}</Text>
      </View>
    </View>
  );

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentIndex(pageNum);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backButton}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{category.name}</Text>
            <View style={styles.placeholder} />
          </View>
          
          <Text style={styles.counter}>
            {currentIndex + 1} of {category.affirmations.length}
          </Text>

          <FlatList
            data={category.affirmations}
            renderItem={renderAffirmation}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            style={styles.list}
          />

          <View style={styles.navigation}>
            <TouchableOpacity
              style={[
                styles.navButton,
                currentIndex === 0 && styles.navButtonDisabled,
              ]}
              disabled={currentIndex === 0}
              onPress={() => {
                // Navigate to previous
              }}
            >
              <Text style={styles.navButtonText}>‹</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.navButton,
                currentIndex === category.affirmations.length - 1 && styles.navButtonDisabled,
              ]}
              disabled={currentIndex === category.affirmations.length - 1}
              onPress={() => {
                // Navigate to next
              }}
            >
              <Text style={styles.navButtonText}>›</Text>
            </TouchableOpacity>
          </View>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  backButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  placeholder: {
    width: 50,
  },
  counter: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  affirmationContainer: {
    width,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  affirmationCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 30,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    minHeight: 200,
    justifyContent: 'center',
  },
  affirmationText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 32,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 40,
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonDisabled: {
    opacity: 0.3,
  },
  navButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});