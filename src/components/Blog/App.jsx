import React, { useEffect, useState } from 'react';
import "./styles/app.scss";

function Main(){
    const [children, setChildren] = useState([])
    const [inputs, setInputs] = useState({});

    useEffect(()=>{
        let body = document.querySelector('body');
        body.style.backgroundColor="white";
    })

    const getdata = async () => {    
        const response = await fetch('http://localhost:3000/data', {mode: 'cors'});
        const data = await response.json()
        let table_elements = [];
        for (let i = 0; i < data.length; i++){
            console.log(data[i].firstname)
            let element = <tr>
                <td>{data[i].firstname}</td>
                <td>{data[i].lastname}</td>
            </tr>
            console.log(element);
            table_elements.push(element)
        }
        setChildren(table_elements);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(inputs);
        setInputs(values => ({...values, [name]: value}))
    }

    return(
        <div className="blog-page-main-container">
            <button className="blog-page-button" id="get-data-button" onClick={getdata}>Get Data</button>
            <div></div>
            <table id="table">
                {children}
            </table>
            <form action="http://127.0.0.1:3000/add" method="POST" className="add-user-form">
                <input type="text" name="first" placeholder="first name" onChange={handleChange} value={inputs.firstname}/>
                <input type="text" name="last" placeholder="last name" onChange={handleChange} value={inputs.lastname}/>
                <input type="submit" className="blog-page-button" id="get-data-button" value="Add User"/>
            </form>
            
        </div>
    )
}

export default Main;