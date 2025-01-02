import './App.css'

function App() {
  return (
    <div className='flex justify-center items-center min-h-screen'>    
      <div className='w-[270px] md:w-[480px] p-8 bg-slate-800 rounded-xl'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-rose-500 pt-6'>Welcome to Slingpack!</h1>
          <p className='text-sm text-white font-semibold pb-8'>Your personal crypto wallet on the go</p>
          <img src="/slingpack.avif" alt="slingLogo" className='rounded-xl'/>
          <button className='bg-rose-500 px-6 py-2 rounded-2xl mt-8 text-xl font-bold text-slate-900' >Lets Go!</button>
        </div>
      </div>
    </div>
  )
}

export default App
