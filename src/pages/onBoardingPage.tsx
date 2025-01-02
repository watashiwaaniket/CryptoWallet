import Mnemonics from "../components/Mnemonics";
import { generateMnemonic } from "bip39"

export default function OnBoardingPage() {
    const mnemonic = generateMnemonic(128);
    return(
        <>
            <div className="w-screen h-screen flex flex-col justify-center items-center">
            <Mnemonics mnemonic={mnemonic}/>
            </div>
            <div className="absolute -z-10 inset-0 h-full w-full 
            bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
            bg-[size:20px_20px]" />
        </>
    )
};
