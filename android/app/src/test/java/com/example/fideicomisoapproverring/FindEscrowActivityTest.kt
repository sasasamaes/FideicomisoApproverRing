package com.example.fideicomisoapproverring

import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import androidx.test.core.app.ActivityScenario
import androidx.test.core.app.ApplicationProvider
import androidx.test.ext.junit.runners.AndroidJUnit4
import okhttp3.Call
import okhttp3.OkHttpClient
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.Mockito.*
import org.junit.Assert.*
import org.robolectric.annotation.Config

@RunWith(AndroidJUnit4::class)
@Config(
    manifest = "AndroidManifest.xml",
    sdk = [33],
    application = TestApplication::class,
    packageName = "com.example.fideicomisoapproverring"
)
class FindEscrowActivityTest {
    
    @Test
    fun testInputValidation() {
        val scenario = ActivityScenario.launch(FindEscrowActivity::class.java)
        
        scenario.onActivity { activity ->
            val engagementIdInput = activity.findViewById<EditText>(R.id.engagementIdInput)
            val contractIdInput = activity.findViewById<EditText>(R.id.contractIdInput)
            val enterButton = activity.findViewById<Button>(R.id.enterButton)
            
            // Test empty inputs
            enterButton.performClick()
            assertEquals(View.GONE, activity.findViewById<LinearLayout>(R.id.loadingPanel).visibility)
            
            // Test valid inputs
            engagementIdInput.setText("TEST123")
            contractIdInput.setText("CONTRACT123")
            enterButton.performClick()
            assertEquals(View.VISIBLE, activity.findViewById<LinearLayout>(R.id.loadingPanel).visibility)
        }
    }

    @Test
    fun testNetworkRequest() {
        val scenario = ActivityScenario.launch(FindEscrowActivity::class.java)
        
        scenario.onActivity { activity ->
            val engagementIdInput = activity.findViewById<EditText>(R.id.engagementIdInput)
            val contractIdInput = activity.findViewById<EditText>(R.id.contractIdInput)
            val enterButton = activity.findViewById<Button>(R.id.enterButton)
            
            engagementIdInput.setText("TEST123")
            contractIdInput.setText("CONTRACT123")
            enterButton.performClick()
            
            // Verify loading state is shown
            assertEquals(View.VISIBLE, activity.findViewById<LinearLayout>(R.id.loadingPanel).visibility)
        }
    }
} 