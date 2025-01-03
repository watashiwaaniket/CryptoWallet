interface MnemonicsProps {
    mnemonic: string;
}

export default function Mnemonics( { mnemonic }: MnemonicsProps ) {
    const wordsArray = mnemonic.split(' ');


    return(
        <div className="w-[270px] md:w-[480px] p-8 bg-slate-800 rounded-xl">
            <h2 className="text-rose-500 font-bold text-2xl">Your Secret Phrases:</h2>
            <p className="text-rose-300 font-semibold text-sm">Please note that if you loose these, you loose your wallet.</p>
            <div className="flex flex-wrap gap-2 pt-6 pb-4">
                {wordsArray.map((word, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-700 text-white w-24 py-2 px-4 rounded-lg shadow-sm text-center"
                    >
                        {word}
                    </div>
                ))}
            </div>
        </div>
    )
};
