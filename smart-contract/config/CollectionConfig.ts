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
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 5.00,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 13.00,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0xCc39d28799B1190E42CD67B1E9E6fE9513EF615f",
  marketplaceIdentifier: 'bianca-alliance',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
