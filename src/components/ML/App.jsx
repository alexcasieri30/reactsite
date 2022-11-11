import { useEffect, useState } from "react";
import "./styles/app.scss";

function MachineLearningHome(){
    const [formdata, setFormdata] = useState({})
    const [titanicResult, setTitanicResult] = useState(null);

    useEffect(()=>{
        let body = document.querySelector('body');
        body.style.backgroundColor="white";
        let container = document.querySelector('.container');
        container.style.backgroundColor="white";
    })

    async function makeDataRequest(e){
        let querystring = "?"
        for (let i = 0; i < Object.keys(formdata).length; i++){
            let key = Object.keys(formdata)[i];
            let value = formdata[key];
            let data = key.toString() + "=" + value.toString();
            querystring = querystring + data;
            querystring = querystring + "&"
        }
        querystring = querystring.substr(0, querystring.length-1)
        let res = await fetch(`http://localhost:5000${querystring}`, {mode: 'cors'})
        res = await res.json();
        console.log("SUCCESS")
        setTitanicResult(res);
    }

    const makeformdata = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormdata(values => ({...values, [name]: value}));
    }

    return <div className="ml-home-container">
        <div className="project">
            <div className="project-form-questions">
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="pclass" type="text" className="ml-input" name="pclass"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="sex" type="text" className="ml-input" name="sex"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="age" type="text" className="ml-input" name="age"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="family" type="text" className="ml-input" name="family"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="fare" type="text" className="ml-input" name="fare"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="cabin" type="text" className="ml-input" name="cabin"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="port" type="text" className="ml-input" name="port"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="ticketnum" type="text" className="ml-input" name="ticketnum"/></div>
            </div>
            <div id="titanic-submit-button"><button onClick={makeDataRequest}>Submit</button></div>
            <div className="titanic-result">
                {
                    titanicResult==0 && <div>You would have survived!</div>
                }
                {
                    titanicResult==1 && <div>Unfortunately, you would not have survived!</div>
                }
            </div>

        </div>

        <div className="project">
                project
        </div>

    </div>
}

export default MachineLearningHome;