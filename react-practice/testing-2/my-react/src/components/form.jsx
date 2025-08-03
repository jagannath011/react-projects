import { useState } from "react"

export function Form() {
    let [formdata, setFormdata] = useState({});
    let [formsubmitted, setFormsubmitted] = useState(false);


    function comingData(e) {
        let { name, value } = e.target;
        let data = { ...formdata }
        data[name] = value;
        setFormdata(data)
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!formdata.name || !formdata.email || !formdata.password) {
            console.log("empty is not allowed");
        } else {
            setFormsubmitted(true);
        }

    }
    // console.log(state);

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label >name</label>
                <input onChange={comingData} name="name" type="text"></input> <br></br>
                <label>email</label>
                <input onChange={comingData} name="email" type="email"></input> <br></br>
                <label>password</label>
                <input onChange={comingData} name="password" type="password"></input><br></br>

                <div>
                    {
                        !formsubmitted ? <button>submit</button> : <p>form submitted</p>
                    }
                </div>

               

            </form>
        </div>
    )
}