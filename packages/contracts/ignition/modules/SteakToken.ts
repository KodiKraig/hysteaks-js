import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const SteakTokenModule = buildModule('SteakTokenModule', (m) => {
  const steakToken = m.contract('SteakToken');

  return { steakToken };
});

export default SteakTokenModule;
