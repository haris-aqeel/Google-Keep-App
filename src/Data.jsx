import React from 'react'
import './index.css'
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

function Data (props) {
    return(
        <div className='Data'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <small>Updated Just Now</small>
            <DeleteForeverTwoToneIcon className='delete' onClick={()=>{
                props.deleteItem(props.id)
            }}/>
        </div>
    );
}

export default Data;