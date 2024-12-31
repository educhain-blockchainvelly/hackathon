import { NetworkConfig } from "./interface";

export const networkConfig: NetworkConfig = {
  testInfo: {
    someKey: "hardhatValue",
    anotherKey: 123,
  },
  rpcUrl: "http://127.0.0.1:8545",
  chainId: 31337,
};

export const GAS_PRICE = 1_000_000_000; // 1 Gwei
