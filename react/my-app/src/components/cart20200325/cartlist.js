// import React from 'react'
import { useProductCountState } from "./carthook";

import React, { createRef } from "react";
export default function Cartlist(props) {
  // const [productdata] = productCountState();
  const item = props.item;
  console.log(item);

  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
      

        <button className="layui-btn layui-btn-xs">-</button>
       <span> {item.num} </span>
        <button className="layui-btn layui-btn-xs">+</button>
      </td>
      <td>{item.price * item.num}</td>
      <td>
        <button className="layui-btn layui-btn-warm">取消</button>
      </td>
    </tr>
  );
}
