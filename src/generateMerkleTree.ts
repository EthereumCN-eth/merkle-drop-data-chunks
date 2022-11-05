import {
  merkletree_generator,
  MerkleDistributorInfo,
} from "merkle-distributor-array";
import fs from "fs";
import path from "path";

const generateMerkleTree = () => {
  const originalFile = path.join(__dirname, "./originalData/kent.json");

  const generatePath = path.join(__dirname, "../chunks");

  const merkle: MerkleDistributorInfo = merkletree_generator(
    originalFile,
    generatePath
  );

  console.log("generated Merkle Root: ", merkle.merkleRoot);
};

(() => {
  generateMerkleTree();
})();
