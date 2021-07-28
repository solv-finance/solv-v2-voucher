# solv-vnft-core

This package contains the source code of the core interfaces of the `VNFT` protocol and the implementation of which to represent splittable, composable Financial NFTs.

## Contracts

- [IVNFT] (./contracts/interface/IVNFT.sol): 

	- `IVNFT` defines all interfaces and events for the standard VNFT protocol, which must be implemented for creating a new VNFT token.
	
- [VNFTCore](./contracts/VNFTCore.sol):

	- `VNFTCore` is an abstract contract which interits from both `IVNFT` and `ERC721`, representing splittable, composable Financial NFTs. On the basis of ERC721 compatibility, `VNFTCore` provides extra implementations of `IVNFT` interfaces to support core abilities such as splitting, merging, partially transferring and approving.
	 
- [AssetLibrary](./contracts/library/AssetLibrary.sol):
	
	- `AssetLibrary` describes the data structure and the internal logic of the underlying assets, including minting, burning, merging and transferring, etc.
