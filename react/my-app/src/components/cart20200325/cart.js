import React from "react";
// import { useReducer } from "react";
import { useProductCountState } from "./carthook";
// import { usereducer, useCountState } from "./Customhook";
import Cartlist from "./cartlist";
// useProductCountState
export default function Cart() {
  const [productdata] = useProductCountState();
//   const [count, { increment, decrement, inputCount }] = useCountState();
  return (
    <div>
      <table className="layui-table" lay-size="lg">
        <thead>
          <tr>
            <th>商品编号</th>
            <th>商品名称</th>
            <th>商品单价</th>
            <th>商品数量</th>
            <th>商品总价</th>
            <th>商品操作</th>
          </tr>
        </thead>
        <tbody>
        
        {  productdata.map(item=>
          {return <Cartlist item={item}>

          </Cartlist>})}
        </tbody>
      
        <tfoot>
                <tr>
                    <th >总数量</th>
                    <th>
                    {/* {getTotalCount()} */}
                    
                    </th>
                    <th>总价</th>
                    <th>
                    {/* {getTotalPrice()} */}
                    </th>
                    <th colSpan="2"><button className="layui-btn layui-btn-danger">清空购物车</button></th>
                </tr>
          

        </tfoot>
      </table>
    </div>
  );
}
