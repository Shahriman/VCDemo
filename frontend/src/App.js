//Updated on 4 Nov 2025
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setData(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div class="App">
            <header class="App-header">
                <h1>React Frontend</h1>
                <p>{data ? data : 'Loading...'}</p>
            </header>
        </div>
    );
}

export default App;
