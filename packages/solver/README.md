
# solver

`solver` is designed as the guardian of Solv Vouchers and Solv Vouchers Market, which handles permissions for user operations on any Vouchers and Market.

## Contracts

- [ISolver](./contracts/interface/ISolver.sol)

	- Defines the core interfaces of `solver`

- [Solver](./contracts/Sovler.sol)

	- Implements all `ISolver` interfaces to provide the guardian abilities for any Vouchers and Market.
		- Verify permissions for users to deposit, withdraw, split, merge or transfer any Vouchers.
		- Verify permissions for users to publish orders, cancel orders or trade in any market.

		
## Deployment


```shell
# for local deployment, run:
yarn deploy:localhost

# for deployment with target network(see: hardhat.config.ts), run:
yarn deploy --network `network`
```


