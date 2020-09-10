import React from 'react'
import './index.css'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'


function Input (props) {
    return(
        <div className='Input'>
            <form onSubmit={props.submit}>
            <input type='text' placeholder='Title' name='title' onChange={props.handleInputs} value={props.values.title} autoComplete="off" required/>
            <textarea placeholder="description" name='description' onChange={props.handleInputs} value={props.values.description} autoComplete="off" required/>
            <button type='submit'><AddCircleRoundedIcon className='plus'/></button>
            </form>
        </div>
    );
}

export default Input;