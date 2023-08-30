const {Web3} = require("web3");
const ABI =require("../ABI.json");
const web3 =new Web3("https://long-cosmological-cherry.ethereum-sepolia.discover.quiknode.pro/71356c263c229d926f1c3e83ac178a4a8fb6e19d/");

const contractAddress="0x997c36046fef14c3aff853e60755d50dfcd50427";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract};
