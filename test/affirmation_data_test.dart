import 'package:flutter_test/flutter_test.dart';
import 'package:affirmation_app/models/affirmation_data.dart';

void main() {
  group('Affirmation Data Tests', () {
    test('should have exactly 12 categories', () {
      expect(AffirmationData.categories.length, equals(12));
    });

    test('all categories should have names and descriptions', () {
      for (final category in AffirmationData.categories) {
        expect(category.name.isNotEmpty, isTrue);
        expect(category.description.isNotEmpty, isTrue);
        expect(category.affirmations.isNotEmpty, isTrue);
      }
    });

    test('should contain expected category names', () {
      final categoryNames = AffirmationData.categories.map((c) => c.name).toList();
      final expectedCategories = [
        'Self-Love',
        'Confidence', 
        'Success',
        'Health',
        'Abundance',
        'Gratitude',
        'Relationships',
        'Healing',
        'Mindfulness',
        'Motivation',
        'Positivity',
        'Stress Relief'
      ];
      
      for (final expected in expectedCategories) {
        expect(categoryNames.contains(expected), isTrue, 
            reason: 'Category "$expected" should be present');
      }
    });
  });
}