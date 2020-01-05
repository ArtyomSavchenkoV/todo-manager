import React from 'react';

import './layout.scss';


const Layout = ({
    cardsElements: cardsElementsArray,
    header,
    addCardButton
}) => {

    return (
        <div className="todo-list">
            <div className="header-container">
                {header}
            </div>
            <div className="cards-container">
                {cardsElements(cardsElementsArray)}
            </div>
            <div className="add-card-button-container">
                {addCardButton}
            </div>
        </div>
    );
};


const cardsElements = (cardsElementsArray) => {
    return cardsElementsArray.map((el) => {
        return (
            <div key={el.key} className="card-item-container">
                {el.element}
            </div>
        );
    });
};


export default Layout;
