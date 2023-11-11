import React from "react";
import faqs from "../data/Faqs";

function FaqsItem({
    category
})
{
    return(
    <>
    {faqs[category].map((faq)=> (
        <div className="faqs__item" key={faq.id}>
        <button className="faqs__accordion">
            <p>{faq.question}</p>
        </button>
        <div className="faqs__panel">
            <p>{faq.answer}</p>
        </div>
        </div>
    ))}
    </>
      );
      
}

export default FaqsItem;
