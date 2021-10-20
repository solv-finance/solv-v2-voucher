# solv-v2-voucher

Solv Vouchers is the DeFi application for users to customize their financial instruments as Vouchers. Through the smart contract of Solv Vouchers, digital assets like tokens could be transformed into Vouchers representing investment allocations as splittable, composable NFTs.

This repository contains the core smart contracts for Solv Protocol V2, along with their configuration files, initialization scripts and deployment information.

More information about Solv Protocol:

- Official Website: [https://solv.finance](https://solv.finance)
- Documentation: [https://docs.solv.finance/solv-documentation](https://docs.solv.finance/solv-documentation)

## Structure

Smart contracts are packaged into four sub-projects, all contained in the `packages` directory.

### solv-token

[`solv-token`](./packages/solv-token) contains the smart contract of the standard ERC-20 token `SOLV`.

### solv-vnft-core

[`solv-vnft-core`](./packages/solv-vnft-core) contains the interface definition of the `VNFT` protocol and the implemention of which to represent splittable, composable Financial NFTs.

### solv-voucher

[`solv-voucher`](./packages/solv-voucher) contains the core smart contracts of `Vouchers` and its `VestingPool`, along with the initialization scripts and deployment information. 

By utilizing the VNFT token standard, the smart contracts of `solv-voucher` allow digital assets to be transformed into Vouchers representing investment allocations as splittable, composable NFTs.

### solver

[`solver`](./packages/solver) contains the smart contract of the manager `Solver`, which provides abilities to enable/disable Vouchers, as well as verify permissions whether users have or not to proceed operations such as depositing, withdrawing and transferring.


## Install, Deploy and Test

### Installation

To install Solv V2 Voucher, pull the repository from GitHub and install all dependencies through `yarn` or `npm`.

```shell
git clone git@github.com:solv-finance-dev/solv-v2-voucher.git

cd solv-v2-voucher

# install with yarn
yarn install --lock-file

# or install with npm
npm install
```

### Deployment

The deployment of `solv-voucher` depends on the deployment of `solver` and its underlying token. 

- Deploy solv-token

```shell
cd solv-token
yarn compile

# for local deployment, run:
yarn deploy:localhost

# for deployment with target network(see: hardhat.config.ts), run:
yarn deploy --network `network`
```

- Deploy solver

```shell
cd solver
yarn compile

# for local deployment, run:
yarn deploy:localhost

# for deployment with target network(see: hardhat.config.ts), run:
yarn deploy --network `network`
```

- Deploy solv-voucher

```shell
cd solv-voucher
yarn compile

# for local deployment, run:
yarn deploy:localhost

# for deployment with target network(see: hardhat.config.ts), run:
yarn deploy --network `network`
```

### Initialization

`solv-voucher` should be initialized after its deployment.

```shell
cd solv-voucher

# for local deployment, run:
yarn init:localhost

# for deployment with target network(see: hardhat.config.ts), run:
yarn init --network `network`
```

### Test

```shell
# for local deployment, run:
yarn test:localhost

# for deployment with target network(see: hardhat.config.ts), run:
yarn test --network `network`
```

## Bug Bounty

The Solv Protocol bug bounty program is on the Immunefi platform and can be accessed at:
[https://www.immunefi.com/bounty/solvprotocol](https://www.immunefi.com/bounty/solvprotocol)

The bug bounty program is focused on the smart contracts and focused on preventing:

- Loss of user funds staked (principal) by freezing or theft
- Theft of unclaimed yield
- Freezing of unclaimed yield
- Smart contract fails to deliver promised returns

### Rewards by threat level

Rewards are distributed according to the impact of the vulnerability based on the Immunefi Vulnerability Severity Classification System.

#### Smart Contracts and Blockchain

| Threat Level | Bounty |
| :--- | :--- |
| Critical | USD $50,000 |
| High | USD $25,000 |
| Medium | USD $10,000 |
| Low | USD $3,000 |


All Critical/High severity bug reports must come with a PoC and a suggestion for a fix in order to be considered for a reward.

Payouts are handled by the Solv Protocol team directly and are denominated in USD. Payouts are done in USDT.
