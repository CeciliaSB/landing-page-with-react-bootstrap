
import React from "react";
import PropType from 'prop-types'

const Cards = (props) => {

    return (

        <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer text-center">
                <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>

    );
};

Cards.propTypes = {
    img: PropType.string,
    title: PropType.string,
    description: PropType.string,
    buttonUrl : PropType.string,
    buttonLabel:  PropType.string
};

export default Cards;


