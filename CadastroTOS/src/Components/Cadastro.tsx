
import { User, Lock } from "phosphor-react";

export function Cadastro() {
    return (
        <>
        
        <div className=" scroll-smooth flex justify-center items-center mt-40">

                <div className="w-422 h-350 flex flex-col">

                    <h1 className="flex justify-center items-center text-[#FF8F3F] text-[30px] ">Login</h1>

                    <label className="text-xs">Username</label>
                    <input type="text"  className= " min-w-full px-8 py-1 text-sm border-orange-500 border-style:solid border-[1px] rounded-[6px]  bg-[#181818] "  />
                    <User weight="bold" className="absolute mt-[4.2rem]  ml-[0.5rem] "/>

                    <label className="text-xs">Password</label>
                    <input type="password"  className= " px-8 py-1 text-sm border-orange-500 border-style:solid border-[1px] rounded-[6px]  bg-[#181818] "  />
                    <Lock weight="bold" className=" absolute mt-[7.2rem] ml-[0.5rem]"/>

                    <div className="flex gap-10 mt-[1rem]">

                    <button className="text-white py-1 text-sm hover:bg-orange-600 transition-all duration-150 ease-linear bg-orange-500 border-0 cursor-pointer rounded-[6px] px-6">
                        ENTRAR
                    </button>
    
                    <button className="border-orange-500 text-sm hover:bg-zinc-700 transition-all duration-150 ease-linear cursor-pointer border-[1px] rounded-[6px] px-2">
                        REGISTRAR
                    </button>

                    </div>

                </div>

        </div>

        </>
    )
}