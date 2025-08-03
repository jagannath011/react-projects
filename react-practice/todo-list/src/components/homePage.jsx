import { useEffect, useState } from "react";

export function HomePage() {
    const [state, setState] = useState('');
    const [arr, setArr] = useState(() => {
        const saved = localStorage.getItem("mytodos");
        return saved ? JSON.parse(saved) : [];
    });


    let getvalue = (e) => {
        e.preventDefault()
        const value = e.target.value;
        setState(value)
    }

    let fetchdata = (e) => {
        e.preventDefault();
        if (state.trim() === "") return;
        setArr((arr) => [...arr, state])
        setState('')
    }
    useEffect(() => {
        localStorage.setItem("mytodos", JSON.stringify(arr))
    }, [arr])


    let removeTodos = (removeindex) => {
        let finalarr = arr.filter(function (_, index) {
            return removeindex !== index;
        })
        setArr(finalarr)
        // localStorage.setItem("mytodos", JSON.stringify(finalarr))

    }

    return (
        <>
            {/* <div className=" flex items-center justify-center "> */}
                <div className="w-1/2 mx-auto flex-1 flex flex-col border border-black bg-black text-white">
                    <h1 className="text-center py-2 text-2xl semi-bold"> To Do List</h1>
                    <form className="flex  justify-center" onSubmit={fetchdata}>
                        <input className="text-black w-1/2 bg-white pl-2" onChange={getvalue} type="text" value={state} name="todo" />
                        <button className="bg-green-400 text-green-900 px-2 ml-2 py-1 rounded"><input className="cursor-pointer" type="submit" /></button>
                    </form>
                    <div className="text-white flex-1 ">
                        <ul className="">
                            {
                                arr.map((todos, index) => (
                                    <div key={index} className="bg-gray-50  flex w-full items-center h-10 my-2 justify-between">
                                        <li className="pl-4 text-green-900 text-2xl" >{todos}</li>
                                        <button onClick={()=>removeTodos(index)} className="bg-red-900 w-16 h-8 cursor-pointer mr-4">Delete</button>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}