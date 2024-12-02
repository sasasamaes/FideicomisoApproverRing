package com.example.fideicomisoapproverring

import android.content.Intent
import android.view.View
import android.widget.LinearLayout
import android.widget.TextView
import androidx.test.core.app.ActivityScenario
import androidx.test.core.app.ApplicationProvider
import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.Assert.*
import org.robolectric.annotation.Config

@RunWith(AndroidJUnit4::class)
@Config(
    manifest = "AndroidManifest.xml",
    sdk = [33],
    application = TestApplication::class,
    packageName = "com.example.fideicomisoapproverring"
)
class EscrowDetailsActivityTest {

    @Test
    fun testEscrowDataDisplay() {
        val testData = """
            {
                "description": "Test Description",
                "issuer": "TestIssuer",
                "signer": "TestSigner",
                "serviceProvider": "TestProvider",
                "amount": "100",
                "balance": "50"
            }
        """.trimIndent()

        val intent = Intent(ApplicationProvider.getApplicationContext(), EscrowDetailsActivity::class.java).apply {
            putExtra("escrowData", testData)
            putExtra("engagementID", "TEST123")
        }

        ActivityScenario.launch<EscrowDetailsActivity>(intent).use { scenario ->
            scenario.onActivity { activity ->
                assertEquals("Test Description", activity.findViewById<TextView>(R.id.txtDescription).text.toString())
                assertTrue(activity.findViewById<TextView>(R.id.txtIssuer).text.contains("TestIssuer"))
                assertEquals(View.VISIBLE, activity.findViewById<LinearLayout>(R.id.resultFrame).visibility)
            }
        }
    }

    @Test
    fun testNoDataDisplay() {
        val intent = Intent(ApplicationProvider.getApplicationContext(), EscrowDetailsActivity::class.java).apply {
            putExtra("engagementID", "TEST123")
        }

        ActivityScenario.launch<EscrowDetailsActivity>(intent).use { scenario ->
            scenario.onActivity { activity ->
                assertEquals(View.VISIBLE, activity.findViewById<LinearLayout>(R.id.noResultFrame).visibility)
                assertEquals(View.GONE, activity.findViewById<LinearLayout>(R.id.resultFrame).visibility)
            }
        }
    }
} 