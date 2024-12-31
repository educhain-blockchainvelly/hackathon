import { NetworkConfig } from "./interface";

export const networkConfig: NetworkConfig = {
  testInfo: {
    someKey: "testnetValue",
    anotherKey: 456,
  },
  rpcUrl: "https://arb-goerli.g.alchemy.com/v2/YOUR_API_KEY",
  chainId: 421613,
};

export const GAS_PRICE = 10_000_000_000; // 10 Gwei
