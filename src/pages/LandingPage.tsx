import { Link } from "react-router-dom";


export default function LandingPage() {
    return(
        <div className="relative min-h-screen flex flex-col items-center justify-center">
        <div className='flex justify-center items-center min-h-screen'>    
            <div className='w-[270px] md:w-[480px] p-8 bg-slate-800 rounded-xl'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-rose-500 pt-6'>Welcome to Slingpack!</h1>
                    <p className='text-sm text-white font-semibold pb-8'>Your personal crypto wallet on the go</p>
                    <img src="/slingpack.avif" alt="slingLogo" className='rounded-xl'/>
                    <Link to='/home' className='bg-rose-500 px-6 py-2 rounded-2xl mt-8 text-xl font-bold text-slate-900'>Lets Go!</Link>
                </div>
            </div>
        </div>
        <div className="absolute -z-10 inset-0 h-full w-full 
        bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
        bg-[size:20px_20px]" />
        </div>
    )
};
