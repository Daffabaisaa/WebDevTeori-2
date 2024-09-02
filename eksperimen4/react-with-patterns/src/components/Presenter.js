import React from 'react';

const Presenter = ({ data, onFilter }) => (
    <div>
        <input type="text" placeholder="Search..." onChange={(e) => onFilter(e.target.value)} />
        <ul>
            {data.slice(0, 100).map(item => (
                <li key={item.id}>{item.name} - {item.email}</li>
            ))}
        </ul>
    </div>
);

export default Presenter;
