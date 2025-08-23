import 'package:flutter/material.dart';
import '../data/affirmations.dart';
import '../widgets/category_card.dart';
import 'affirmation_list_screen.dart';

class CategoryScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final categories = affirmationCategories;
    return Scaffold(
      appBar: AppBar(
        title: Text('Choose a Category'),
      ),
      body: GridView.builder(
        padding: EdgeInsets.all(16),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 3,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
        ),
        itemCount: categories.length,
        itemBuilder: (context, index) {
          return CategoryCard(
            category: categories[index],
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => AffirmationListScreen(
                    category: categories[index],
                  ),
                ),
              );
            },
          );
        },
      ),
    );
  }
}