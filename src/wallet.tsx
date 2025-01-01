import { generateMnemonic, mnemonicToSeedSync } from 'bip39';

export default function wallet() {
    const mnemonic = generateMnemonic();
    console.log('Mnemonic:', mnemonic);
    const seed = mnemonicToSeedSync(mnemonic);
    console.log(seed)
};
