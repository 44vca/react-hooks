import React, { useState, useEffect } from 'react';

export default function ItemsList({ getItems }) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log('render');
    }, [getItems])

    return (
        <ul>
            {items.map(el => <li key={el}>{el}</li>)}
        </ul>
    )
}