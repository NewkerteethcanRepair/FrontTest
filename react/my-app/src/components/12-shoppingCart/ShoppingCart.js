import React from 'react';
import GoodsItem from "./GoodsItem.js";
import { useGoodsState } from "./hook.js";

export default function ShoppingCart() {
    const [goodsData, { increment, decrement, deleteOne, clear }] = useGoodsState();

    const getTotalCount = () => {
        let totalCount = 0;
        for (let item of goodsData) {
            totalCount += item.count
        }
        return totalCount;
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (let item of goodsData) {
            totalPrice += item.count * item.price;
        }
        return totalPrice;
    }

    return (
        <table border="1">
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
                {
                    goodsData.map(item => <GoodsItem key={item.id} item={item}
                        increment={increment} decrement={decrement} deleteOne={deleteOne} />)
                }
            </tbody>
            <tfoot>
                <tr>
                    <th>总数量</th>
                    <th>{getTotalCount()}</th>
                    <th>总价</th>
                    <th>{getTotalPrice()}</th>
                    <th colSpan="2"><button onClick={clear}>清空购物车</button></th>
                </tr>
            </tfoot>
        </table>
    )
}
