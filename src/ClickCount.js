import React from 'react';
import { useState } from 'react';
import './style.css';

export default function ClickCount() {
  const [count, setCount] = useState(0);
  const [fecha, setFecha] = useState();

  const actualizarValores = () => {
    setCount(count + 1)
    setFecha(Date());
  };

  return (
    <div>
      <p className="contador">Número de clicks: {count}</p>
      <p className="contador">Ultimo Click: {fecha}</p>
      <button className="btn" onClick={actualizarValores}>
        Click Count
      </button>
    </div>
  );
}
