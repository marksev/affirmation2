import 'package:flutter/material.dart';

class CategoryCard extends StatelessWidget {
  final String category;
  final VoidCallback onTap;

  CategoryCard({required this.category, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.teal[100],
      child: InkWell(
        onTap: onTap,
        child: Center(
          child: Text(
            category,
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}