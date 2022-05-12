require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note pave put hunt robot equal gesture'; 
let testAccounts = [
"0x093010153aa2bc38c70a4b29889982ff4d595e51ca466184ad3c8ca267217a7f",
"0xb7473b0bd020d669c6ef1a30a2eb1d26ab33c668a50a214c40d2e8b5781cd857",
"0x387af98857217a93f27ed8f0f87c25a8613c90e9d640ca2756c1489b3e1177ef",
"0x3e55387d3719aa98e2ecfcd614f35f8e63afdf1611cbefb8812c5ee77051cd71",
"0x6186bbae57677820b2c25f2f9666ea3cea082b66427fab6567f5d36f112b8ddd",
"0xba41c601cdac114173f6c6132f77605db1d1132f3ea38eed7d9ed366ee3c6ec1",
"0x73829ff8604f4c07c4dbd293b11031d074914fa6ed995ac1ebd53be5f7007c4f",
"0xea27a216f3e3607ed5ac5400c6cc519f2f1f403eae570d82948d5be0ff7b32a8",
"0x8ebb7160342f686e640e10e940ca192c4912fc9dca033051d17db4df5cd020ff",
"0x83c23947f16b76b84de23b2c8113379e0063d47745226e80023b73c811634281"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

