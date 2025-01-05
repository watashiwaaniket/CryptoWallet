import Footer from "../components/Footer";
import Mnemonics from "../components/Mnemonics";
import Wallet from "../components/Wallet";
import { generateMnemonic } from "bip39"


export default function OnBoardingPage() {
    const mnemonic = generateMnemonic(128);

    return(
        <>
            <div className="w-screen min-h-screen flex flex-col justify-center items-center overflow-y-auto mt-6">
            <Mnemonics mnemonic={mnemonic}/>
            <Wallet mnemonic={mnemonic}/>
            <Footer />
            </div>            
            <div className="absolute -z-10 inset-0 h-full w-full 
            bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
            bg-[size:20px_20px]" />
        </>
    )
};
