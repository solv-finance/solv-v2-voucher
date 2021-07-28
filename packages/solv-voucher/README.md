# solv-voucher

`solv-voucher` contains the core smart contracts of `Voucher` and its `VestingPool`, along with the initialization scripts and deployment information. 

As an implementation of the VNFT token standard, the smart contracts of `solv-voucher` allow digital assets to be transformed into Vouchers representing investment allocations as splittable, composable NFTs.


## Contracts

- [ICToken](./contracts/ICToken.sol)

	- `ICToken` is the core smart contract for Vouchers, which inherits from `VNFTCore`. The contract provides all abilities of Vouchers, including minting, claiming, splitting, merging, transferring, etc.

- [VestingPool](./contracts/VestingPool.sol)

	- `VestingPool` implements release rules and the internal logic of Vouchers. The contract handles all operations related to the underlying assets of any Vouchers.

	
- [VestingLibrary](./contracts/library/VestingLibrary.sol)

	- `VestingLibrary` defines the `Vesting` structure to maintain the amount of the underlying assets. The contract also provides methods to calculate the amount of underlying assets in the process of minting, claiming, splitting, merging, transferring, etc.

## Deploy and Test

### Deployment

```shell
# for local deployment, run:
yarn deploy:localhost

# for deployment with target network(see: hardhat.config.ts), run:
yarn deploy --network `network`
```

### Initialization

```shell
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



