

export default function Body() {
    return (
        <>

            <div className="flex items-center justify-center max-w-6xl w-full">
                <div className="w-xs h-xs  rounded-full  overflow-hidden ">
                    <img src="/me.jpg" className="w-full h-full object-contain" alt="" />
                </div>
            </div>

            <div className="text-white  w-full max-w-xl">
                <h1 className="text-6xl font-bold">Hi, it's</h1>
                <h1 className="text-6xl font-bold text-amber-500">Jagannath</h1>
                <h3 className="text-xl mt-6">I'm a <span className="text-amber-500"> software developer</span></h3>
                <p className="text-sm mt-4 md:text-lg">i'm a Fullstack Developer with experience in building scalable APis and server-side applications. Currently, I'm a student actively learning and improving my skills in Frontend Development as well, with knowledge of HTML, CSS, and JavaScript.
                    While my main focus is on backend technologies like Nodejs and MySQL, I'm excited to keep growing and expanding my skill set in full-stack</p>
            </div>

        </>
    )
}