import React from 'react';
import './Input.css';

export const Input = ({onSubmit, value, onChange}) => {
    return (
    <form onSubmit={onSubmit}>
        <input
            className="input-bar" 
            type="text" 
            placeholder="Enter task..." 
            value={value} 
            onChange={onChange}
        />
        <button className="submit-bttn">Submit</button>
    </form>
    )
}