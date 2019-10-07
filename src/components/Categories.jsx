import React from 'react';

export const Categories = (props) => {
        console.log(props.selected);
    const categories = props.categories.map((category, i) =>
        <li key={i} onClick={() => props.applyCategory(category)}
            className={props.selected === category ? 'selected' : ''}>{category}</li>);

    return <ul className='categories'>{categories}</ul>
};