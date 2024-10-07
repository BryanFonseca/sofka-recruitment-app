export class ProductItem {
    private readonly _id: string;
    private readonly _name: string;

    constructor(item: RemoteProductItem) {
        this._id = item.id;
        this._name = item.name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
}
