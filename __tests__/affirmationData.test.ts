import { affirmationCategories } from '../src/data/affirmationData';

describe('Affirmation Data', () => {
  test('should have exactly 12 categories', () => {
    expect(affirmationCategories.length).toBe(12);
  });

  test('all categories should have names and descriptions', () => {
    affirmationCategories.forEach(category => {
      expect(category.name).toBeTruthy();
      expect(category.description).toBeTruthy();
      expect(category.affirmations.length).toBeGreaterThan(0);
    });
  });

  test('should contain expected category names', () => {
    const categoryNames = affirmationCategories.map(c => c.name);
    const expectedCategories = [
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

    expectedCategories.forEach(expected => {
      expect(categoryNames).toContain(expected);
    });
  });

  test('each category should have at least 8 affirmations', () => {
    affirmationCategories.forEach(category => {
      expect(category.affirmations.length).toBeGreaterThanOrEqual(8);
    });
  });
});