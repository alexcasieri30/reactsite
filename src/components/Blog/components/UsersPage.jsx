import React, { useEffect, useState } from 'react';
import "./styles/users_page.scss";

function Main(){
    const [children, setChildren] = useState([])
    const [inputs, setInputs] = useState({});

    useEffect(()=>{
        let body = document.querySelector('body');
        body.style.backgroundColor="white";
        console.log(children);
        if (children.length==0){
            getdata();
        }
    })

    const getdata = async () => {
        const response = await fetch('http://localhost:3001/users', {mode: 'cors'});
        console.log("RESPONSE: ", response);
        const data = await response.json()
        let table_elements = [];
        for (let i = 0; i < data.length; i++){
            let element = <tr key={i} className="blog-page-users-table-tr">
                <td className="blog-page-users-table-td">{data[i].first_name}</td>
                <td className="blog-page-users-table-td">{data[i].last_name}</td>
                <td className="blog-page-users-table-td">{data[i].username}</td>
                <td className="blog-page-users-table-td">{data[i].email}</td>
            </tr>
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

    async function submitButton(e){
        if (!inputs['first']||!inputs['username']){
            return
        }
        const response2 = await fetch('http://localhost:3001/users', {
            method: 'POST', 
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({first: inputs['first'], last: inputs['last'], username: inputs['username'], email: inputs['email']})
        });
        await getdata();
        setInputs({first: '', last: '', username: '', email: ''})
        return response2;
    }

    return(
        <div className="blog-page-main-container">
            <div className="blog-signup-form">
                <input type="text" className="blog-signup-form-input" name="first" placeholder="first name" onChange={handleChange} value={inputs['first']}/>
                <input type="text" className="blog-signup-form-input" name="last" placeholder="last name" onChange={handleChange} value={inputs['last']}/>
                <input type="text" className="blog-signup-form-input" name="username" placeholder="username" onChange={handleChange} value={inputs['username']}/>
                <input type="text" className="blog-signup-form-input" name="email" placeholder="email" onChange={handleChange} value={inputs['email']}/>
                <button type="submit" className="blog-signup-form-input" id="blog-page-button" onClick={(e) => submitButton(e)}>Add User</button>
            </div>
            <div className="blog-page-users-table-div">
                <div className="blog-page-users-table-title">
                    Users
                </div>
                <div className="blog-page-users-table">
                    <table id="users-table">
                        {children}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Main;