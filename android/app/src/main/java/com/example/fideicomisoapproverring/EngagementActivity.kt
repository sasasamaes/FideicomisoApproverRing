package com.example.fideicomisoapproverring

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.fideicomisoapproverring.ui.theme.FideicomisoApproverRingTheme

class EngagementActivity : AppCompatActivity() {

    private lateinit var txtOutput: TextView
    private lateinit var btnInitNFC: Button
    private lateinit var btnScanTag: Button
    private lateinit var btnStartMFA: Button
    private lateinit var btnManageWallet: Button
    private lateinit var btnApprove: Button
    private lateinit var btnCancel: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_engagement)

        // Inicialización de vistas
        txtOutput = findViewById(R.id.txtOutput)
        btnInitNFC = findViewById(R.id.btnInitNFC)
        btnScanTag = findViewById(R.id.btnScanTag)
        btnStartMFA = findViewById(R.id.btnStartMFA)
        btnManageWallet = findViewById(R.id.btnManageWallet)
        btnApprove = findViewById(R.id.btnApprove)
        btnCancel = findViewById(R.id.btnCancel)

        // Recibir datos del Intent
        val engagementData = intent.getStringExtra("engagementData")
        txtOutput.text = engagementData ?: "Datos de la API no disponibles"

        // Inicializa NFC
        btnInitNFC.setOnClickListener {
            RingOfRingsSDK.initializeRingOfRingsNFC(applicationContext)
            txtOutput.text = "NFC inicializado"
        }

        // Escanear Tag NFC
        btnScanTag.setOnClickListener {
            RingOfRingsSDK.startNFCTagPolling(this) { tag ->
                txtOutput.text = "Tag encontrado: ${tag.id}"
                tag // Retorna el tag procesado
            }
        }

        // Iniciar MFA
        btnStartMFA.setOnClickListener {
            val mfaData = "datoMFAEncriptado" // Datos MFA encriptados reales
            val index = 0
            val isMFAInitialized = RingOfRingsSDK.initializeRingOfRingsMFA(index, mfaData)
            if (isMFAInitialized) {
                txtOutput.text = "MFA inicializado correctamente"
            } else {
                txtOutput.text = "Error en inicialización de MFA"
            }
        }

        // Gestión de Wallet
        btnManageWallet.setOnClickListener {
            if (!RingOfRingsSDK.hasWallet()) {
                val walletResponse = RingOfRingsSDK.createWallet(applicationContext)
                txtOutput.text = "Wallet creada: ${walletResponse?.address}"
            } else {
                val walletData = RingOfRingsSDK.getWalletData()
                txtOutput.text = "Wallet existente: ${walletData?.address}"
            }
        }

        // Aprobar transacción
        btnApprove.setOnClickListener {
            approveTransaction()
        }

        // Cancelar transacción
        btnCancel.setOnClickListener {
            cancelTransaction()
        }
    }

    private fun approveTransaction() {
        // Aquí integras la lógica del Ring para aprobar la transacción
        Toast.makeText(this, "Transacción aprobada", Toast.LENGTH_SHORT).show()
    }

    private fun cancelTransaction() {
        // Aquí integras la lógica del Ring para cancelar la transacción
        Toast.makeText(this, "Transacción cancelada", Toast.LENGTH_SHORT).show()
    }
}
