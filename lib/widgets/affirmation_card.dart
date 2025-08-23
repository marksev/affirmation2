import 'package:flutter/material.dart';

class AffirmationCard extends StatelessWidget {
  final String affirmation;

  AffirmationCard({required this.affirmation});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Text(
          affirmation,
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}