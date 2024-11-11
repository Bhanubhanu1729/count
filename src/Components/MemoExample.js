import React, { useState, useMemo } from 'react';

function MemoExamples() {
    console.log("Main component rendered");

    const [number, setNumber] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const updateNumber = (e) => {
         //setNumber(Number(e.target.value));
        setNumber(e.target.value);

    };
    const updateA = (e) => {
        setA(Number(e.target.value));
        //setA(e.target.value);
    };
    const updateB = (e) => {
        //setB(Number(e.target.value));
        setB(e.target.value);
    };

    // Memoized values to avoid unnecessary calculations
    const mulv = useMemo(() => mul(b), [b]);
    const squarev = useMemo(() => square(number), [number]);
    const addv = useMemo(() => add(a), [a]);

    return (
        <div>
            <label>
                Number for square: 
                <input type='number' value={number} onChange={updateNumber} />
            </label>
            <br /><br />

            <label>
                Number for add: 
                <input type='number' value={a} onChange={updateA} />
            </label>
            <br /><br />

            <label>
                Number for mul: 
                <input type='number' value={b} onChange={updateB} />
            </label>
            <br /><br />

            <button onClick={increaseCount}>Increase Count</button>
            <h1>Count: {count}</h1>
            <h1>Square Value: {squarev}</h1>
            <h1>Add Value: {addv}</h1>
            <h1>Mul Value: {mulv}</h1>
        </div>
    );
}

// Helper functions with default values for robustness
function square(number = 0) {
    console.log('Square function called');
    return Math.pow(number, 2);
}

function add(a = 0) {
    console.log('Add function called');
    return a + 10;
}

function mul(b = 0) {
    console.log('Mul function called');
    return b * 2;
}

export default MemoExamples;
