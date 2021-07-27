
# solver

`solver` is designed as the guardian of Solv Vouchers and Solv Vouchers Market, which is responsible for controlling the allowance of operations for any Vouchers and Market.

## Contracts

- [ISolver](./contracts/interface/ISolver.sol)

	- Defines all core interfaces of `solver`

- [Solver](./contracts/Sovler.sol)

	- Implements all `ISolver` interfaces to provide the guard abilities for any Vouchers and Market.
		- Verify a user's permission to deposit, withdraw, split, merge or transfer any Vouchers.
		- Verify a user's permission to publish orders, cancel orders or trade in any market.

		
## Deployment


```shell
# for local deployment, run:
yarn deploy:localhost

# for deployment with target network(see: hardhat.config.ts), run:
yarn deploy --network `network`
```


