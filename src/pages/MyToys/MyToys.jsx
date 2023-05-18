import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys , setMyToys] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/myToys/${user.email}`)
        .then(res => res.json())
        .then( data => setMyToys(data))
    } ,[])

    console.log(myToys)
    
    return (
        <div>
            <h3>my toys page</h3>
        </div>
    );
};

export default MyToys;