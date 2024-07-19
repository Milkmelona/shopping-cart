import React from "react";
import faqs from "../const/Faqs";
import { useState } from "react";

function FaqsItem({category}){

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
            {faq.id === isActiveItem ?
            <span class="material-symbols-outlined faqs__button">
            add
            </span>
            :
            <span class="material-symbols-outlined faqs__button">
            remove
            </span>            
            }
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
