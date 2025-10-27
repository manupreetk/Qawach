import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying with account:", deployer.address);

  const Qawach = await ethers.getContractFactory("QawachCertificate", deployer);
  const qawach = await Qawach.deploy();
  await qawach.waitForDeployment();

  console.log("Contract deployed to:", await qawach.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
