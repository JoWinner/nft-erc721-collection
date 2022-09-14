import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'BiancaAlliance',
  tokenName: 'Bianca Alliance',
  tokenSymbol: 'BIANCA',
  hiddenMetadataUri: 'ipfs://QmPUvnocfMxzKLMxrFJecNvHhNbHsKojtg4LqSNfoGkBoc/hidden.json',
  maxSupply: 96000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 4,
  },
  publicSale: {
    price: 13.00,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x4c214eF31c9971E941F9e50c657A1a3bfAe79873",
  marketplaceIdentifier: 'bianca-alliance',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
