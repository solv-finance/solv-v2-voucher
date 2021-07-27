# solv-voucher

`solv-voucher` contains the core smart contracts of `Vouchers` and its `VestingPool`, along with the initialization scripts and deployment information. 

By utilizing the VNFT token standard, the smart contracts of `solv-voucher` allow digital assets to be transformed into Vouchers representing investment allocations as splittable, composable NFTs.


## Contracts

- [ICToken](./contracts/ICToken.sol)

	- `ICToken` is the core smart contract for Vouchers, which inherits from `VNFTCore`. The contract implements all of the abilities of Vouchers, including minting, claiming, splitting, merging, transferring, etc.

- [VestingPool](./contracts/VestingPool.sol)

	- `VestingPool` implements the underlying logic of Vouchers in terms of the underlying assets and releasing rules. The contract is responsible for all operations related to the underlying assets of any Vouchers.

	
- [VestingLibrary](./contracts/library/VestingLibrary.sol)

	- `VestingLibrary` defines the `Vesting` structure to maintain the amount of the underlying assets and the releasing rules. The contract also provides methods to calculate the amount of underlying assets in the process of minting, claiming, splitting, merging, transferring, etc.

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



