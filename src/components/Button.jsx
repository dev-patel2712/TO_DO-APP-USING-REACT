import React from 'react';

const Button =({onClick, style,name})=>{
    return(
    <div>
    <button className="btn btn-primary my-2"
     style={style}
     onClick={onClick}>
            {name}
    </button>
    </div>
    )
}
export default Button;