import Nav from "./nav";
import Body from "./hero";

export default function Layout (){

    return(
        <div className="min-h-screen flex flex-col font-serif overflow-hidden ">
            <Nav/>
            <div className="flex flex-grow flex-col items-center justify-center bg-black ">
            <Body/>
            </div>
        </div>
    )
}