import React from 'react';

export default function Main({ showAlert }) {
    return (
        <>
            <h1>Example with CONTEXT</h1>
            <button className='btn btn-success' onClick={showAlert}>Show alert</button>
        </>
    )
}