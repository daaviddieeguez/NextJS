"use client";

import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="justify-items-center">
      <p>Count: {count}</p>
      <div className="mx-auto w-max mt-8">
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700" onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
    </div>
  );
}
