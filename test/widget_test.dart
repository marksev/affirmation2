import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:hello_world_app/main.dart';

void main() {
  testWidgets('Hello World test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const HelloWorldApp());

    // Verify that our app displays 'HELLO WORLD'.
    expect(find.text('HELLO WORLD'), findsOneWidget);
    expect(find.text('Hello World App'), findsOneWidget);
  });
}