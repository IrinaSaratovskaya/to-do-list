import React from 'react';
import './Item.css';

export const Item = ({checked, id, crossItem, value, date, deleteItem, editingState, setEditing, deactivateEditing, editTask}) => {

    return (
        <li className="list-item" id={id}>
            <div className="title-cont"> 
                <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={crossItem} 
                />
                {!editingState && (
                    <p className={checked ? "strike todo-text" : "todo-text"} onClick={setEditing}>{value}</p>
                )} 
                {editingState && (
                    <form className="editing" onSubmit={deactivateEditing}>
                        <input className="todo-text" onChange={editTask} value={value} />
                    </form>
                )}
            </div> 
            <div>
                <span className="date-text">{date}</span> 
                <button className="delete-bttn" onClick={deleteItem}>x</button>  
            </div>
        </li>
    )
}