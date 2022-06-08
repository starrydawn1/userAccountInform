// /* eslint-disable node/no-missing-import */
// // import { Contract } from "ethers";
// import Web3 from "web3";
// import { ILendingPoolAbi } from "../abis";
// import { AbiItem } from "web3-utils";
// // const { ethers } = require("hardhat");

// const currentProvider = new Web3.providers.HttpProvider(
//   "http://localhost:8545"
// );
// const web3 = new Web3(currentProvider);

// const userAddress = "0xbEF22A7b62bdAc0faE9bB7584c26b5eebC58C5Ee";

// export const main = async () => {
//   const lendingPoolContract = new web3.eth.Contract(
//     ILendingPoolAbi,
//     "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9"
//   );
//   // console.log(lendingPoolContract);

//   const userAccountData = await lendingPoolContract.methods
//     .getUserAccountData(userAddress)
//     .call();

//   const userCollateral = userAccountData.totalCollateralETH;
//   const userDept = userAccountData.totalDebtETH;
//   const userBorrowAvailable = userAccountData.availableBorrowsETH;
//   const userLtv = userAccountData.ltv;
//   const userLiquidationThreshold = userAccountData.s;
//   const userHealthFactor = userAccountData.healthFactor;

//   const deciCollarteral = userCollateral / Math.pow(10, 18);
//   const deciDept = userDept / Math.pow(10, 18);
//   const deciBorrowAvailable = userBorrowAvailable / Math.pow(10, 18);
//   const deciLtv = userLtv / Math.pow(10, 2);
//   const deciLiquidationThreshold = userLiquidationThreshold; // Math.pow(10, 2);
//   const deciHealthFactor = userHealthFactor / Math.pow(10, 18);
//   console.log("담보 : " + deciCollarteral + " ETH");
//   console.log("부채 : " + deciDept + " ETH");
//   console.log("대출가능 : " + deciBorrowAvailable + " ETH");
//   console.log("담보 대출 비율 : " + deciLtv + " %");
//   console.log("청산 대상 비율 : " + deciLiquidationThreshold + " %");
//   console.log("healthFactor : " + deciHealthFactor);

//   if (deciHealthFactor < 1) {
//     console.log("unsafe 청산 대상 ");
//   } else if (deciHealthFactor < 1.5) {
//     console.log("청산 위험!! 담보 추가할 것");
//   } else {
//     console.log("safe 안전");
//   }

//   const user = {
//     deciCollarteral,
//     deciDept,
//     deciBorrowAvailable,
//     deciLtv,
//     deciLiquidationThreshold,
//     deciHealthFactor,
//   };

//   return user;
// };

// main().catch((error) => {
//   console.error(error);
//   // eslint-disable-next-line no-process-exit
//   process.exit(1);
// });
