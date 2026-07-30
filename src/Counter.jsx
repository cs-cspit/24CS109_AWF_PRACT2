import React, { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName: 'a', lastName: 'b'});

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>counter - {count}</button>
            <button onClick={() => setCount(count - 1)}>counter - {count}</button>
            <button onClick={() => setCount(0)}>counter - {count}</button> <br />
            firstName: <input type="text" value={name.firstName} 
            onChange={(e) => setName({...name, firstName: e.target.value})} /> <br />
            lastName: <input type="text" value={name.lastName} 
            onChange={(e) => setName({...name, lastName: e.target.value})} /> <br />
            <h1>Count: {count}</h1>
            firstName: <h1>{name.firstName}</h1>
            lastName: <h1>{name.lastName}</h1>
        </div>
    )
}

export default Counter;