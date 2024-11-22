# Fideicomiso Approver Ring

Fideicomiso Approver Ring is an Android application designed to facilitate the approval of trusts using the [Ring of Rings SDK](https://github.com/ringofrings/ringofringssdk) and the [Trustless Work API](https://docs.trustlesswork.com/trustless-work). This application allows users to securely and efficiently interact with trust contracts.

## 📁 Project Structure

The project is located in the `android` folder and is developed using Android Studio.

## 📝 Prerequisites

### Minimum Hardware Requirements:
- Operating System: Windows (8, 10, or 11) / Linux / macOS (10.14 Mojave or later) / ChromeOS.
- RAM: 8 GB (16 GB recommended)
- Storage: 4 GB of free space for Android Studio and dependencies.
- CPU: 64-bit processor (Intel or AMD).

### Software Requirements:
- [Android Studio](https://developer.android.com/studio): Version 4.0 or higher.
- [JDK](https://www.oracle.com/java/technologies/javase-downloads.html): Version 8 or higher.
- An Android device or a configured emulator

## ⚙️ Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**

   Open a terminal and run the following command to clone the repository:

   ```bash
      git clone https://github.com/your-username/Revolutionary_Farmers.git
   ```

2. **Open the Project in Android Studio**

   Navigate to the android folder inside the cloned repository:

   ```bash
      cd Revolutionary_Farmers/android
   ```

   Then, open the project in Android Studio:
	- Launch **Android Studio**.
   - Click on “Open an existing Android Studio project”.
   - Select the `android` folder from the cloned repository.

3. **Configure Dependencies**

   Configure Dependencies
   ```bash
      implementation 'com.ringofrings:ringofringssdk:latest_version'
   ```

   Check the Ring of Rings SDK repository (https://github.com/ringofrings/ringofringssdk) for the latest version.


4. **Configure the Trustless Work API**

Follow the [Trustless Work documentation](https://docs.trustlesswork.com/trustless-work) to correctly integrate the API into your application. Make sure to have all the necessary credentials and configurations, such as API keys and corresponding endpoints.

## 🚀 Usage

Once you have installed and configured the project, follow these steps to run and use the application:

1. **Compile and Run**
   In **Android Studio**, select a device or emulator on which you want to run the application. Then, click the “Run” button (or press **Shift + F10**) to compile and run the application.

2. **Interacting with the Application**
   Upon opening the application, you will be able to interact with trust contracts. The available functionalities include:
   - **Approve Trusts:** Select a trust and follow the instructions to approve it.
   - **Reject Trusts:** If necessary, you can also reject trusts by following the designated workflow.
   - **Verify Contracts:** You can review the status of trust contracts from the interface.

## 🛠 Tech Stack

- **[Android SDK](https://developer.android.com/studio)** - Framework for building Android applications.
- **[Kotlin](https://kotlinlang.org/)** - Programming language for building Android apps.
- **[Ring of Rings SDK](https://github.com/ringofrings/ringofringssdk)** - SDK for integrating ring-based identity and access management in Android applications.
- **[Trustless Work API](https://docs.trustlesswork.com/trustless-work)** - Enables trustless payments via smart contracts, securing funds in escrow until milestones are approved by clients.