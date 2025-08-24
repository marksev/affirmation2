import 'package:flutter/material.dart';

class AffirmationViewerScreen extends StatelessWidget {
  final List<String> affirmations = [
    "I am confident and capable.",
    "I believe in myself and my abilities.",
    "I am worthy of love and respect.",
    "I am growing and improving every day."
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Affirmations"),
        centerTitle: true,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: affirmations.length,
        itemBuilder: (context, index) {
          return Container(
            margin: const EdgeInsets.symmetric(vertical: 8),
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.blueAccent.withOpacity(0.2),
              borderRadius: BorderRadius.circular(12),
              // ❌ Removed invalid backdropFilter line
            ),
            child: Text(
              affirmations[index],
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Colors.black87,
              ),
            ),
          );
        },
      ),
    );
  }
}