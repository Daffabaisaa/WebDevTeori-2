const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const PORT = 3001;

app.get('/data', (req, res) => {
    const largeData = Array.from({ length: 10000 }, () => ({
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
    }));
    res.json(largeData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
