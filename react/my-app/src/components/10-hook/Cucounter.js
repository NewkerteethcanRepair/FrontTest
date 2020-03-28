import { usereducer, useCountState } from "./Customhook";

import React, { createRef } from "react";

export default function Cucounter() {
  const [count, { increment, decrement, inputCount }] = useCountState();
  const element = createRef();
  return (
    <div>
      <h1>自定义hoop计算器:{count}</h1>
      <button
        onClick={() => {
          increment()
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          decrement()
        }}
      >
        -1
      </button>

      <input
        type="text"
        ref={element}
        value={count}
        onChange={e => {
            inputCount(e.target.value)
        }}
      />
    </div>
  );
}
