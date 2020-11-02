class StateApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors),
            searchTerm: '',
        };
    }

    mapIntoObject(arr) {
        return arr.reduce( (acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        },{});
    }
//deleted functions, substituted by initial calculation and getState method

    lookupAuthor = (authorId) => {
        return this.data.authors[authorId];
    }

    getState = () => {
        return this.data;
    }
}
export default StateApi;