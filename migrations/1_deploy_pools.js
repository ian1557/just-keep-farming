const KEEPETHPool = artifacts.require("KEEPETHPool");
const TBTCETHPool = artifacts.require("TBTCETHPool");

module.exports = async function (deployer) {
  await deployer.deploy(KEEPETHPool);
  await deployer.deploy(TBTCETHPool);
};
