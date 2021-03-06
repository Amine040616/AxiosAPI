import React, { useState, useEffect  } from 'react';
import User from './User';
import axios from 'axios';

function UserList (){

    const [listUsers, setListUsers]=useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (res => {setListUsers(res.data)    })
        .catch (err => console.log(err))
    }, [])  
    /* ; console.log(listUsers); */

    return(
        <div style={{width:'70%',display: 'flex',flexWrap :'wrap'}}>
            {listUsers.map((el,i)=> <User data={el} key={i}/>)}
        </div>
    )
}

export default UserList;