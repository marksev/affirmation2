import 'package:flutter/material.dart';
import 'affirmation_viewer_screen.dart';

class HomeScreen extends StatelessWidget {
  final List<String> categories = [
    "Confidence",
    "Love",
    "Success",
    "Happiness",
    "Health"
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Affirmation Categories"),
        centerTitle: true,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: categories.length,
        itemBuilder: (context, index) {
          final category = categories[index];
          return Card(
            margin: const EdgeInsets.symmetric(vertical: 8),
            child: ListTile(
              title: Text(category),
              trailing: const Icon(Icons.arrow_forward_ios, size: 16),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    // ❌ This was causing the error
                    // builder: (context) => AffirmationViewerScreen(category: category),

                    // ✅ FIXED: no category argument (matches your current AffirmationViewerScreen)
                    builder: (context) => AffirmationViewerScreen(),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}