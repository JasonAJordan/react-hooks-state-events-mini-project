import React from "react";

function Category({name , onSelectCategory }){

    //const className = category === selectedCategory ? "selected" : null;
    return(
        <button
        key={name}
        
        onClick={() => onSelectCategory(name)}
        >{name}
        </button>
    )
}


export default Category;