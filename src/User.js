import React from 'react';
import logo from './logo.svg';
import './App.css';


function User ({data}){
    
    console.log(data.data);
    return(
        
        
        <div className="descriptions">
            <div>
                <div className='categYear'>
                    <h1>{data.name[0]}{data.username[0]}</h1>
                    <img src={logo} alt='name' className="App-logo" />
                </div>
                <div className='categDet'>
                    <h2>{data.name}</h2>
                    <h3>Username : {data.username}</h3>
                    <span>Phone number : {data.phone}</span>
                    <p>Email : {data.email}</p>
                    {/* <a href="#" target='_blank' rel="noreferrer">Website</a> */}
                </div>
                    
            </div>
        </div>
        
    )
}

export default User;