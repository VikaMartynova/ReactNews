import React from 'react';

export const Categories = (props) => {

    const categories = props.categories.map((category, i) =>
        <li key={i} onClick={() => props.applyCategory(category)}>{category}</li>);

    return <ul className='categories'>{categories}</ul>
};