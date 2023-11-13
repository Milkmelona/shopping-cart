import React from "react";
import faqs from "../data/Faqs";
import { useState } from "react";
import max from "../assets/maximize.svg";
import min from "../assets/minimize.svg";

function FaqsItem({
    category
})
{
    // const[isAnsVisible, setIsAnsVisible] = useState(false);

    // function handleClick(){
    //     setIsAnsVisible(!isAnsVisible);
    // }

    const[isActiveItem, setIsActiveItem] = useState(null);

    function handleClick(id){
        setIsActiveItem( id === isActiveItem ? null : id)
    }

    return(
    <>
    {faqs[category].map((faq)=> (
        <div className={`faqs__item ${faq.id === isActiveItem ? `active` : ""}`} key={faq.id}>
            <button className="faqs__accordion" onClick={() => handleClick(faq.id)}>
                <p>{faq.question}</p>
                <img 
                src= {faq.id === isActiveItem ? min : max} 
                alt= {faq.id === isActiveItem ? "minimize button" : "minimize button"}
                className="faqs__button"/> 
                </button>
                {faq.id === isActiveItem &&(
                <div className="faqs__panel">
                <p>{faq.answer}</p>
                </div>)}
        </div>
    ))}
    </>
      );
      
}

export default FaqsItem;
