import React, { createRef } from 'react'

export default function AddTo({ addTodo }) {
    const element = createRef();
    return (
        <div>
            <input type="text" ref={element} />
            <button onClick={() => {
                addTodo(element.current.value);
                element.current.value = '';
            }}>addTo</button>
        </div>
    )
}
