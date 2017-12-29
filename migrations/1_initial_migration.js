var Migrations = artifacts.require("./Migrations.sol");
const Web3 = require('web3');

module.exports = function(deployer) {
web3.personal.unlockAccount(web3.eth.accounts[0], process.env.ACCOUNT_PASSWORD, 36000);

  deployer.deploy(Migrations);
};
