import { NetworkConfig } from "./interface";

export const networkConfig: NetworkConfig = {
  testInfo: {
    someKey: "mainnetValue",
    anotherKey: 789,
  },
  rpcUrl: "https://arb1.arbitrum.io/rpc",
  chainId: 42161,
};

export const GAS_PRICE = 50_000_000_000; // 50 Gwei
