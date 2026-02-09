"use client";

import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="justify-items-center">
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
    </div>
  );
}
