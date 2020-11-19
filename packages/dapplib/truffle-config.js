require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth script attitude guess climb off snap'; 
let testAccounts = [
"0xf65d9588cb4021930eb164baee676b32883e3e519b609ae825d18e8ecfdcfd9c",
"0x8640707c4a657b8bf0f7f81018fffe967a881d3f13fad1ecd1f3c439e5e407f6",
"0x6302add5ca09c9e31fc3bc5c21976b2e2f647af960a94e64dcbaea8a4d4f2e50",
"0x3ec856e753eed8e7362c7cfc8435a75f5ab2aa6b5690a91d5ff4ae4066f9eee5",
"0xc158f5085a7f0c8d296722cdbb5f675d75b42805734d80a8bc6e2ab7c96b77f5",
"0xa9e3efcdb133ba503fa4228fb2818137ddd1f0087763cdb7624854b2c6ab5dcd",
"0x902223ce0de8b42ccd773e60ee02b6807925840a269716e5573f7d44dc542ca7",
"0x93703c9daab09b445254b82af7c339d6e291342404839c80ed18e4337fb3915f",
"0xaa8de4970c88d08b9c354ae068106cd31f0f7b7b71668d8566b762ccf66604ce",
"0x2763cc97fa628b4e789a2683d28b0e679fc4f74cdcf630acc124cb8675875d20"
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
            version: '^0.5.11'
        }
    }
};
