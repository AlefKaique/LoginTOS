
import { User } from "phosphor-react";

export function Cadastro() {
    return (
        <>
        
        <div className=" scroll-smooth flex justify-center items-center">

                <div className="w-422 h-350 flex flex-col">

                    <h1 className="flex justify-center items-center text-[#FF8F3F] text-[30px] ">Login</h1>

                    <label>Username</label>
                    <input type="text"  className= " text-sm border-orange-500 border-style:solid border-2 rounded-[4px]  bg-[#181818] "  />
                    <User weight="bold"/>
                                    

                </div>

        </div>
        
        </>
    )
}