import 'package:flutter/material.dart';
import '../data/affirmations.dart';
import '../widgets/affirmation_card.dart';

class AffirmationListScreen extends StatelessWidget {
  final String category;

  AffirmationListScreen({required this.category});

  @override
  Widget build(BuildContext context) {
    final affirmationList = affirmations[category] ?? [];
    return Scaffold(
      appBar: AppBar(
        title: Text(category),
      ),
      body: ListView.builder(
        itemCount: affirmationList.length,
        itemBuilder: (context, index) {
          return AffirmationCard(
            affirmation: affirmationList[index],
          );
        },
      ),
    );
  }
}