import React from 'react';
import logo from './logo.svg';
import './App.css';


function User (data){
    //const list = data.data;
    console.log(data.data);
    return(
        
        
        <div className="descriptions">
            <div>
                <div className='categYear'>
                    <span>{data.phone}</span>
                    <span>date</span>
                    <img src={logo} alt='name' className="App-logo" />
                </div>
                    
                    <h1>{data.name}</h1>

                    <p>{data.email}</p>
                    {/* <a href="#" target='_blank' rel="noreferrer">Website</a> */}
            </div>
        </div>
        
    )
}

export default User;