class DataService {
    constructor() {
        if (!DataService.instance) {
            this.data = [];
            DataService.instance = this;
        }
        return DataService.instance;
    }

    async fetchData() {
        if (this.data.length === 0) {
            const response = await fetch('http://localhost:3001/data');
            this.data = await response.json();
        }
        return this.data;
    }

    filterData(searchTerm) {
        return this.data.filter(item => item.name.includes(searchTerm));
    }
}

// Only freeze the instance itself, not its properties
const instance = new DataService();

export default instance;
