import 'package:flutter/material.dart';
import '../models/affirmation_data.dart';

class AffirmationViewerScreen extends StatefulWidget {
  final AffirmationCategory category;

  const AffirmationViewerScreen({
    Key? key,
    required this.category,
  }) : super(key: key);

  @override
  State<AffirmationViewerScreen> createState() => _AffirmationViewerScreenState();
}

class _AffirmationViewerScreenState extends State<AffirmationViewerScreen> {
  late PageController _pageController;
  int _currentIndex = 0;

  @override
  void initState() {
    super.initState();
    _pageController = PageController();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.category.name),
        centerTitle: true,
        backgroundColor: Colors.transparent,
        elevation: 0,
        foregroundColor: Colors.white,
      ),
      extendBodyBehindAppBar: true,
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              Color(0xFF667eea),
              Color(0xFF764ba2),
            ],
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              const SizedBox(height: 20),
              Text(
                '${_currentIndex + 1} of ${widget.category.affirmations.length}',
                style: const TextStyle(
                  color: Colors.white70,
                  fontSize: 16,
                ),
              ),
              const SizedBox(height: 20),
              Expanded(
                child: PageView.builder(
                  controller: _pageController,
                  onPageChanged: (index) {
                    setState(() {
                      _currentIndex = index;
                    });
                  },
                  itemCount: widget.category.affirmations.length,
                  itemBuilder: (context, index) {
                    return Container(
                      margin: const EdgeInsets.all(20),
                      padding: const EdgeInsets.all(30),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.9),
                        borderRadius: BorderRadius.circular(20),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.1),
                            blurRadius: 20,
                            offset: const Offset(0, 10),
                          ),
                        ],
                      ),
                      child: Center(
                        child: Text(
                          widget.category.affirmations[index],
                          style: const TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.w500,
                            color: Color(0xFF333333),
                            height: 1.4,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ),
                    );
                  },
                ),
              ),
              const SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: _currentIndex > 0
                        ? () {
                            _pageController.previousPage(
                              duration: const Duration(milliseconds: 300),
                              curve: Curves.easeInOut,
                            );
                          }
                        : null,
                    icon: const Icon(
                      Icons.arrow_back_ios,
                      color: Colors.white,
                      size: 30,
                    ),
                  ),
                  const SizedBox(width: 40),
                  IconButton(
                    onPressed: _currentIndex < widget.category.affirmations.length - 1
                        ? () {
                            _pageController.nextPage(
                              duration: const Duration(milliseconds: 300),
                              curve: Curves.easeInOut,
                            );
                          }
                        : null,
                    icon: const Icon(
                      Icons.arrow_forward_ios,
                      color: Colors.white,
                      size: 30,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}