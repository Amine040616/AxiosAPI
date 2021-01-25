import React from 'react';
import logo from './logo.svg';

import './App.css';


function User (){
    return(
        <div className="card">
        
        <div className="descriptions">
            <div>
                <div className='categYear'>
                    <span>{phone}</span>
                    <span>{date}</span>
                </div>
                    <img src={logo} alt='name' className="App-logo" />
                    <h1>{name}</h1>

                    <p>{description}</p>
                    <a href={details} target='_blank' rel="noreferrer">{Website}</a>
            </div>
        </div>
        </div>
    )
}

export default User;