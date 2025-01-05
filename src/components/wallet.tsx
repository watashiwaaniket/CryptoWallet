import { Buffer } from "buffer";
(window as any).Buffer = Buffer;

import { Keypair } from "@solana/web3.js";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { useState } from "react";

function toHexString(byteArray: Uint8Array): string {
  return Array.from(byteArray)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export default function Wallet( {mnemonic}:{
  mnemonic : string
}) {
  const seed = mnemonicToSeedSync(mnemonic);
  const [keypairs, setKeypairs] = useState<{ publicKey: string; privateKey: string }[]>([]);

  let walletCount = keypairs.length;

  function generateWallet(){
    walletCount++;
    const path = `m/44'/501'/${walletCount}'/0'`; // Derivation path
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secretKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const publicKey = Keypair.fromSecretKey(secretKey).publicKey.toBase58();
    setKeypairs((prevKeypairs) => [
      ...prevKeypairs,
      { publicKey, privateKey: toHexString(secretKey) },
    ]);
  }
  

    return (
      <div className="w-[360px] md:w-[480px] p-8 bg-slate-800 rounded-xl mt-6 mb-6">
        <h2 className="text-rose-500 font-bold text-2xl">Generate Public-Private keys:</h2>
        <p className="text-rose-300 font-semibold text-sm">Click Here To generate wallets.</p>
        <div className="flex justify-end">
        <button className="bg-violet-500 text-white font-semibold p-3 px-4 rounded-xl mt-4" onClick={generateWallet}>Generate Wallet</button>
        </div>
        <div className="mt-4">
        {keypairs.map((keypair, index) => (
          <div key={index} className="p-2 bg-gray-700 rounded-md mt-2">
            <h3 className="text-rose-500 font-bold text-xl mb-2">
              Wallet {index + 1}
            </h3>
            <p className="text-white font-normal w-[270px] md:w-[400px] flex flex-col break-words overflow-hidden p-2">
              <span className="text-lg font-bold text-violet-300">Public Key:</span> {keypair.publicKey}
            </p>
            <p className="text-slate-400 font-normal w-[270px] md:w-[400px] flex flex-col break-words overflow-hidden p-2">
              <span className="text-lg font-bold text-yellow-200">Private Key:</span> {keypair.privateKey}
            </p>
            </div>
          ))}
        </div>
      </div>
    );
};


