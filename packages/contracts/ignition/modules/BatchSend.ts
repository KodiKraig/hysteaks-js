// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BatchSendModule = buildModule("BatchSendModule", (m) => {
  const batchSend = m.contract("BatchSend");

  return { batchSend };
});

export default BatchSendModule;
