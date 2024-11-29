package com.example.fideicomisoapproverring

import android.content.Intent
import android.os.Bundle
import android.text.SpannableStringBuilder
import android.view.View
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.text.bold
import org.json.JSONObject

class EscrowDetailsActivity : AppCompatActivity() {

    private lateinit var btnFund: Button
    private lateinit var btnBack: Button
    private lateinit var engagementTitle: TextView
    private lateinit var description: TextView
    private lateinit var issuer: TextView
    private lateinit var signer: TextView
    private lateinit var serviceProvider: TextView
    private lateinit var amount: TextView
    private lateinit var balance: TextView

    private lateinit var resultFrame: LinearLayout
    private lateinit var noResultFrame: LinearLayout

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_escrow_details)

        resultFrame = findViewById(R.id.resultFrame)
        noResultFrame = findViewById(R.id.noResultFrame)

        btnFund = findViewById(R.id.btnFund)
        btnBack = findViewById(R.id.btnBack)
        engagementTitle = findViewById(R.id.txtEngagementTitle)
        description = findViewById(R.id.txtDescription)
        issuer = findViewById(R.id.txtIssuer)
        signer = findViewById(R.id.txtSigner)
        serviceProvider = findViewById(R.id.txtServiceProvider)
        amount = findViewById(R.id.txtAmount)
        balance = findViewById(R.id.txtBalance)

        val escrowData = intent.getStringExtra("escrowData")
        val engagementID = intent.getStringExtra("engagementID")

        val title = engagementID + " [Escrow ID]"

        setTitle(title)

        if(escrowData != null) {
            val data = JSONObject(escrowData)

            description.text = data.get("description").toString()
            issuer.text = SpannableStringBuilder().bold { append("Issuer: ") }.append(data.get("issuer").toString())
            signer.text = SpannableStringBuilder().bold { append("Signer: ") }.append(data.get("signer").toString())
            serviceProvider.text = SpannableStringBuilder().bold { append("Service Provider: ") }.append(data.get("serviceProvider").toString())
            amount.text = SpannableStringBuilder().bold { append("Amount: ") }.append(data.get("amount").toString())
            balance.text = SpannableStringBuilder().bold { append("Balance: ") }.append(data.get("balance").toString())

            resultFrame.visibility = View.VISIBLE
        } else {
            noResultFrame.visibility = View.VISIBLE
        }

        btnBack.setOnClickListener {
            val intent = Intent(this@EscrowDetailsActivity, FindEscrowActivity::class.java)
            startActivity(intent)
        }

        btnFund.setOnClickListener {
            fundEscrow()
        }
    }

    private fun fundEscrow() {
        Toast.makeText(this, "Escrow fund", Toast.LENGTH_SHORT).show()
    }
}