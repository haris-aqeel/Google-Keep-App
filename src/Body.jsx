import React, { useState } from 'react'
import Input from './Input'
import Data from './Data'
import './index.css'


function Body () {

    


    const [datas, setdatas] = useState({
        id: "",
        title: "",
        description: ""
    });

    const [storeData, setStoreData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStoreData((prev)=>{
            return[...prev, datas]
        })
        setdatas({
            id: "",
            title: "",
            description: ""
        })
    }

    const handleInput = (e) => {
        const {name, value} = e.target;
        setdatas((prev)=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    const handleDelete = (id) => {
        setStoreData((prev)=>{
            return prev.filter((curr, ind)=>{
                return ind!== id
            })
        })
    }


    return(
        <div className='Body'>
            <Input 
            values={datas}
            handleInputs={handleInput}
            submit={handleSubmit}/>

            <div className="container align">
            {storeData.map((element, index)=>{
                return<Data
                key={index}
                id={index}
                title={element.title}
                description={element.description}
                deleteItem={handleDelete}/>
            })}

</div>
            
        </div>
    );
}

export default Body;