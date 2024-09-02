import React, { useEffect, useState } from 'react';
import Presenter from './Presenter';
import DataService from './DataService';

const Container = () => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        DataService.fetchData().then(data => setFilteredData(data));
    }, []);

    const handleFilter = (searchTerm) => {
        setFilteredData(DataService.filterData(searchTerm));
    };

    return <Presenter data={filteredData} onFilter={handleFilter} />;
};

export default Container;
