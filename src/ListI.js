import React from 'react';
import FlipMove from 'react-flip-move';
import './ListI.css';
function ListItems(props)
{
    const items=props.items;
    const listItems = items.map(items =>
   {
       return <div className="listi" key={items.key}>
     <p>
         <input type="text" id={items.key} value={items.item} onChange={(e)=>{
             props.Uitems(e.target.value,items.key)}}/>
        <span>
       
        <input type="submit" className="delete" onClick={() => {
            props.Ditems(items.key)
        }} value="D"></input>
        </span>
     </p>
     
    </div>})
    return <div className="list">
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    </div>;
}

export default ListItems;