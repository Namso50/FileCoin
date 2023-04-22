const CONTRACT_ADDRESS = "0x67b3aC309b4A9D930420951D3656506FcC2Fba36";
const META_DATA_URL = "ipfs://bafyreibt7ha7suq5tmm23bwhbvgtzvzty3ns4o4fpqjtdk7og7kgnru7qi/metadata.json";

// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
 }

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
