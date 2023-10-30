export class IamCounter {
    constructor() { this.n = -1; }
    get() { return ++this.n; }
}
