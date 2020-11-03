class StateApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors),
            searchTerm: '',
        };
        this.subscriptions = {};
        this.lastSubscriptionId = 0;
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

    subscribe = (cb) => {//receives a callback: what the user is interested in executing:  knowing when data changes
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = cb;
        this.lastSubscriptionId;
    }

    unsubscribe = (subscriptionId) => {
        delete this.subscriptions[subscriptionId];
    }

    notifySubscribers = () => {
        Object.values(this.subscriptions).forEach((cb) => cb());
    }

    mergeWithState = (stateChange) => {
        this.data = {
            ...this.data,
            ...stateChange
        };
        this.notifySubscribers();
    }

    setSearchTerm = (searchTerm) => {
        this.mergeWithState({
            searchTerm,
        });
        //this.setState({searchTerm}); //TODO
        //this.data.searchTerm = searchTerm;
        //we could emit events this.emit("chhange") or smth
        //this.notifySubscribers();
    }
}
export default StateApi;