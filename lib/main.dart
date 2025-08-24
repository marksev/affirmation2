import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const AffirmationApp());
}

class AffirmationApp extends StatelessWidget {
  const AffirmationApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Affirmation App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'System',
        useMaterial3: true,
      ),
      home: const HomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}