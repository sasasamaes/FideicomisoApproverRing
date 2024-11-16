
[![Telegram Chat][tg-badge]][tg-url]

[tg-badge]: https://img.shields.io/endpoint?color=neon&logo=telegram&label=chat&style=flat-square&url=https%3A%2F%2Ftg.sumanjay.workers.dev%2FRevolutionary_Farmers
[tg-url]: https://t.me/Revolutionary_Farmers


# Revolutionary Farmers

Using the Trustless Work API, this project builds an escrow-based solution to streamline crop financing—an innovative step for decentralized agriculture. What’s even more exciting? We integrated HyperCycle NFC rings to release funds from escrow, marking this as our first-ever DePIN (Decentralized Physical Infrastructure) integration!

This project was created and initiated during the [Ethereum Pura Vida 2024](https://devfolio.co/projects/revolutionary-farmers-b88c) hackathon.

## Project Structure

- **android**: An Android Studio app where users can approve trust transactions using the Zero-Knowledge Ring ([Zero-Knowledge Ring](https://www.zero-knowledge-ring.com/)) for privacy-focused transaction validation. This app also connects to the Trustless Work API to manage escrow-based approvals.
  
- **contracts**: Blockchain smart contracts (under development) that will support decentralized management of the trusts, providing a transparent and secure solution for crop financing.

- **frontend**: A Next.js application where farmers can request trusts via the Trustless Work API. This interface allows farmers to access the platform securely and manage their requests for escrow-backed financing.

## Presentation Video

For a more detailed overview, you can watch our presentation video here: [Project Presentation on Loom](https://www.loom.com/share/9a809ec2054c4ebc89f10ad5fc64e334?sid=372717f6-9b9d-43d6-8305-77ecc417ad02)

## Team Members

- **Francisco Javier Campos Diaz** - [GitHub](https://github.com/sasasamaes)
- **Manuel Jimenez Garro** - [GitHub](https://github.com/ManuelJG1999)
- **Sebastian Salazar** - [GitHub](https://github.com/salazarsebas)
- **Matias Aguilar** - [GitHub](https://github.com/aguilar1x)
- **Diego Barquero** - [GitHub](https://github.com/DiegoB1911)

## Technologies Used

- **Android**: Developed in Android Studio, utilizing HyperCycle NFC rings to manage and release funds from escrow.
- **Blockchain Contracts**: In-progress smart contracts to manage the escrow-based trusts in a decentralized manner.
- **Next.js**: Frontend framework for the farmer-facing application, enabling secure requests and management of crop financing.
- **Trustless Work API**: Integration with the Trustless Work API ([Documentation](https://docs.trustlesswork.com/trustless-work)) for secure and efficient trust management.
- **RingOfRings SDK**: SDK for integrating ring-based identity and access management in Android applications ([RingOfRings SDK](https://github.com/ringofrings/ringofringssdk)).

## Installation

Each folder within the project (`android`, `contracts`, `frontend`) contains its own `README.md` file with specific instructions for setting up that component locally. Follow the individual setup guides in each folder to configure and run each part of the project.

1. Clone the repository:
   ```bash
   git clone https://github.com/sasasamaes/FideicomisoApproverRing.git