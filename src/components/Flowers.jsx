import React from "react";

const Flowers = (props) => {
    return (
        <>
            <div className="cards">
                <h2>{props.title}</h2>
                <img
                    src={props.imgsrc}
                    alt="flower"
                />
                <p>{props.text}</p>
                <button>{props.btn}</button>
                <hr />
            </div>
        </>
    );
};

export default Flowers;
