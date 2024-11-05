# Fideicomiso Approver Ring

This repository contains the components of an application designed to approve trusts using Zero-Knowledge proof technology and blockchain smart contracts. The application connects with the Trustless Work API to manage trust requests and is structured into three main parts: Android, smart contracts, and frontend.

## Project Structure

- **android**: An Android Studio application where users can approve trusts using the Zero-Knowledge Ring, an advanced privacy technology for validating transactions without exposing sensitive information. The app connects with the Trustless Work API to manage approvals.

- **contracts**: Contains blockchain smart contracts (under development) that will allow decentralized management of trusts. These contracts will be deployed on a blockchain network to ensure transparency and security of trusts.

- **frontend**: A Next.js application where farmers can request trusts using the Trustless Work API. This interface provides farmers with secure and efficient access to initiate and manage their trust requests.

## Technologies Used

- **Android**: Developed in Android Studio, using Zero-Knowledge Ring ([Zero-Knowledge Ring](https://www.zero-knowledge-ring.com/)) for trust validation.
- **Blockchain Contracts**: Smart contracts in development to manage trusts on a blockchain network.
- **Next.js**: React framework used in the frontend for farmers to request and manage trusts.
- **Trustless Work API**: Integration with the Trustless Work API ([Documentation](https://docs.trustlesswork.com/trustless-work)) to create and approve trusts.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sasasamaes/FideicomisoApproverRing.git