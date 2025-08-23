import 'package:flutter/material.dart';
import 'screens/category_screen.dart';

void main() {
  runApp(AffirmationApp());
}

class AffirmationApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Affirmation App',
      theme: ThemeData(
        primarySwatch: Colors.teal,
        brightness: Brightness.light,
      ),
      home: CategoryScreen(),
    );
  }
}