import { NetworkConfig, TestInterface } from "./interface";

// 사용할 네트워크들을 Enum으로 정의
export enum Network {
  hardhat = "hardhat",
  testnet = "testnet",
  mainnet = "mainnet",
}

// 환경 변수에서 네트워크 정보를 가져오고 검증하는 함수
function validateNetwork(): Network {
  const { NETWORK } = process.env;

  if (!NETWORK || !Object.values(Network).includes(NETWORK as Network)) {
    throw new Error(
      `네트워크를 설정하지 않았거나 등록되지 않은 네트워크입니다. 유효한 네트워크: ${Object.values(
        Network
      ).join(", ")}`
    );
  }

  return NETWORK as Network;
}

// 네트워크 경로 설정
const networkPath = `./constants/${validateNetwork()}`;

// 네트워크 관련 정보를 동적으로 로드
const {
  networkConfig,
  GAS_PRICE,
}: {
  networkConfig: NetworkConfig;
  GAS_PRICE: number;
} = require(networkPath);

// 네트워크 설정 객체를 기본으로 내보내기
export default {
  networkConfig,
  GAS_PRICE,
};
