// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QawachCertificate is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    // Pass deployer as the owner
    constructor() ERC721("Qawach Certificate", "QWCH") Ownable(msg.sender) {}

    function mintCertificate(address to, string memory tokenURI) external onlyOwner returns (uint256) {
        _nextTokenId++;
        uint256 newTokenId = _nextTokenId;
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        return newTokenId;
    }
}
