import React from 'react'

export default function GoodsItem({ item, increment, decrement, deleteOne }) {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <button onClick={() => decrement(item.id)}>-</button>
                {item.count}
                <button onClick={() => increment(item.id)}>+</button>
            </td>
            <td>{item.count * item.price}</td>
            <td><button onClick={() => deleteOne(item.id)}>删除</button></td>
        </tr>
    )
}
