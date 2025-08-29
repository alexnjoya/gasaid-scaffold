# ⚡ Gas Aid - Web3 Gas Sponsorship Platform

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Scaffold-ETH 2</a>
</h4>

🧪 **Gas Aid** is a decentralized application (dApp) built on Ethereum that breaks down barriers to Web3 adoption by providing sponsored gas fees and ENS subdomains for new users. Organizations and community members can donate to sponsor gas fees, making Web3 accessible to everyone.

⚙️ Built using **Scaffold-ETH 2** framework with NextJS, RainbowKit, Hardhat, Wagmi, Viem, and TypeScript.

## 🚀 Features

- ✅ **Free Gas Claims**: New users can claim sponsored gas fees to start their Web3 journey
- 🎯 **ENS Subdomains**: Get free ENS subdomains for Web3 identity
- 💰 **Donation System**: Organizations and individuals can sponsor users
- 📊 **Real-time Dashboard**: Track donations, claims, and impact metrics
- 🔐 **Wallet Integration**: Seamless connection with various wallet providers
- 🌙 **Dark/Light Theme**: Modern UI with theme switching
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices

## 🏗️ Architecture

This project is built on **Scaffold-ETH 2**, a comprehensive toolkit for Ethereum dApp development:

- **Smart Contracts**: Built with Solidity and Hardhat
- **Frontend**: Modern React app with Next.js App Router
- **State Management**: Zustand for global state management
- **Styling**: Tailwind CSS with custom Ethereum-themed design system
- **Blockchain Integration**: Wagmi hooks for Ethereum interactions

## 📋 Requirements

Before you begin, you need to install the following tools:

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## 🚀 Quickstart

To get started with Gas Aid, follow the steps below:

1. **Install dependencies**:
```bash
cd gasaid-scaffold
yarn install
```

2. **Run a local network** (first terminal):
```bash
yarn chain
```
This starts a local Ethereum network using Hardhat for development and testing.

3. **Deploy smart contracts** (second terminal):
```bash
yarn deploy
```
This deploys the Gas Aid smart contracts to your local network.

4. **Start the frontend** (third terminal):
```bash
yarn start
```
Visit your app on: `http://localhost:3000`

## 🧪 Testing

Run smart contract tests:
```bash
yarn hardhat:test
```

## 📁 Project Structure

```
gasaid-scaffold/
├── packages/
│   ├── hardhat/          # Smart contracts & deployment
│   │   ├── contracts/    # Solidity smart contracts
│   │   ├── deploy/       # Deployment scripts
│   │   └── test/         # Contract tests
│   └── nextjs/           # Frontend application
│       ├── app/          # Next.js App Router pages
│       ├── components/   # React components
│       ├── store/        # Zustand state management
│       └── styles/       # Global CSS & Tailwind config
```

## 🎨 Customization

- **Smart Contracts**: Edit contracts in `packages/hardhat/contracts`
- **Frontend Pages**: Modify pages in `packages/nextjs/app/`
- **Components**: Update UI components in `packages/nextjs/components/`
- **Styling**: Customize design in `packages/nextjs/styles/globals.css`
- **Configuration**: Adjust settings in `packages/nextjs/scaffold.config.ts`

## 🌐 Available Pages

- **Home** (`/`): Landing page with hero section and features
- **Claim Gas** (`/claim`): Users can claim sponsored gas fees
- **Donate** (`/donate`): Organizations can sponsor users
- **Dashboard** (`/dashboard`): Track platform statistics and impact
- **Admin** (`/admin`): Organization management interface

## 🔧 Development

### Key Technologies
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **State**: Zustand, React Hooks
- **Blockchain**: Wagmi, Viem, RainbowKit
- **Smart Contracts**: Solidity, Hardhat

### Design System
Gas Aid uses a custom Ethereum-themed design system with:
- Official Ethereum.org color palette
- Gradient backgrounds and shadows
- Responsive components and animations
- Dark/light theme support

## 📚 Documentation

- **Scaffold-ETH 2 Docs**: [docs.scaffoldeth.io](https://docs.scaffoldeth.io)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Wagmi Docs**: [wagmi.sh](https://wagmi.sh)

## 🤝 Contributing

We welcome contributions to Gas Aid! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for the Web3 community using Scaffold-ETH 2**