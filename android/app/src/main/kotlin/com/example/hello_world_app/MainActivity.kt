package com.example.hello_world_app

import android.app.Activity
import android.os.Bundle
import android.widget.TextView
import android.view.Gravity

class MainActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Create a TextView to display "HELLO WORLD"
        val textView = TextView(this)
        textView.text = "HELLO WORLD"
        textView.textSize = 32f
        textView.gravity = Gravity.CENTER
        
        // Set the TextView as the content view
        setContentView(textView)
    }
}