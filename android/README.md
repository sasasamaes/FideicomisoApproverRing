# Fideicomiso Approver Ring

## Description

Fideicomiso Approver Ring is an Android application designed to facilitate the approval of trusts using the [Ring of Rings SDK](https://github.com/ringofrings/ringofringssdk) and the [Trustless Work API](https://docs.trustlesswork.com/trustless-work). This application allows users to securely and efficiently interact with trust contracts.

## Project Structure

The project is located in the `android` folder and is developed using Android Studio.

## Prerequisites

Before you begin, ensure you have the following programs and tools installed:

- [Android Studio](https://developer.android.com/studio) (version 4.0 or higher)
- JDK 8 or higher
- An Android device or a configured emulator

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**

   Open a terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/sasasamaes/FideicomisoApproverRing.git

2. **Open the Project in Android Studio**

   Navigate to the android folder inside the cloned repository:

   ```bash
   cd FideicomisoApproverRing/android
   ```

   Then, open the project in Android Studio:
	•	Launch Android Studio.
	•	Click on “Open an existing Android Studio project”.
	•	Select the android folder from the cloned repository.

3. **Configure Dependencies**

  Configure Dependencies
  ```
  implementation 'com.ringofrings:ringofringssdk:latest_version'
  ```

Check the Ring of Rings SDK repository (https://github.com/ringofrings/ringofringssdk) for the latest version.


4. **Configure the Trustless Work API**

Follow the Trustless Work documentation(https://docs.trustlesswork.com/trustless-work) to correctly integrate the API into your application. Make sure to have all the necessary credentials and configurations, such as API keys and corresponding endpoints.

5. **Usage**

Once you have installed and configured the project, follow these steps to run and use the application:
	1.	Compile and Run
In Android Studio, select a device or emulator on which you want to run the application. Then, click the “Run” button (or press Shift + F10) to compile and run the application.
	2.	Interacting with the Application
Upon opening the application, you will be able to interact with trust contracts. The available functionalities include:
	•	Approve Trusts: Select a trust and follow the instructions to approve it.
	•	Reject Trusts: If necessary, you can also reject trusts by following the designated workflow.
	•	Verify Contracts: You can review the status of trust contracts from the interface.

6. **Contributions**

If you would like to contribute to this project, please follow these steps:
1.	Fork the repository.
2.	Create a new branch for your feature or fix:
```
git checkout -b feature/new-feature
```
3.	Make your changes and commit them:
```
git commit -m "Add new feature"
```
4. Push your changes to your forked repository:
```
git push origin feature/new-feature
```
5.	Create a pull request to the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##Contact

For any questions or concerns, please contact [Francisco Javier Campos Diaz](https://github.com/sasasamaes) or [Manuel Jimenez Garro](https://github.com/ManuelJG1999) or [Sebastian Salazar](https://github.com/salazarsebas) or [Matias Aguilar](https://github.com/aguilar1x) or [Diego Barquero](https://github.com/DiegoB1911).


