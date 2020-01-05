import React from 'react';

import './layout.scss';


const Layout = ({
    cardsElements: cardsElementsArray,
    header
}) => {

    return (
        <div className="todo-list">
            <div className="header-container">
                {header}
            </div>
            <div className="cards-container">
                {cardsElements(cardsElementsArray)}
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
