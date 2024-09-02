import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/data')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            });
    }, []);

    const handleFilter = (searchTerm) => {
        setFilteredData(data.filter(item => item.name.includes(searchTerm)));
    };

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={(e) => handleFilter(e.target.value)} />
            <ul>
                {filteredData.slice(0, 100).map(item => (
                    <li key={item.id}>{item.name} - {item.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
