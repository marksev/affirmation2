import 'package:flutter_test/flutter_test.dart';
import 'package:affirmation2/main.dart';

void main() {
  testWidgets('App has greeting', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    expect(find.text('Hello, Affirmation2!'), findsOneWidget);
  });
}
