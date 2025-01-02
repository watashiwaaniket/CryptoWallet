import { generateMnemonic } from "bip39";


export default function wallet() {
    const mnemonic = generateMnemonic(128);
    return mnemonic;
};
