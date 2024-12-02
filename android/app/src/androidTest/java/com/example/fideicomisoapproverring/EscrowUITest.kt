package com.example.fideicomisoapproverring

import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.*
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.*
import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class EscrowUITest {

    @get:Rule
    val activityRule = ActivityScenarioRule(FindEscrowActivity::class.java)

    @Test
    fun testFindEscrowFlow() {
        // Input test data
        onView(withId(R.id.engagementIdInput))
            .perform(typeText("TEST123"), closeSoftKeyboard())
        
        onView(withId(R.id.contractIdInput))
            .perform(typeText("CONTRACT123"), closeSoftKeyboard())

        // Click search button
        onView(withId(R.id.enterButton))
            .perform(click())

        // Verify loading state
        onView(withId(R.id.loadingPanel))
            .check(matches(isDisplayed()))
    }

    @Test
    fun testEscrowDetailsNavigation() {
        // Input test data and search
        onView(withId(R.id.engagementIdInput))
            .perform(typeText("TEST123"), closeSoftKeyboard())
        
        onView(withId(R.id.contractIdInput))
            .perform(typeText("CONTRACT123"), closeSoftKeyboard())

        onView(withId(R.id.enterButton))
            .perform(click())

        // Verify navigation to details
        onView(withId(R.id.resultFrame))
            .check(matches(isDisplayed()))
    }
} 