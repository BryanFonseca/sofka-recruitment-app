import { convertToDashedDate, convertToSlashedDate } from "utils/helpers";

export class ProductItem {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _description: string;
    private readonly _logo: string;
    private readonly _releaseDate: string;
    private readonly _revisionDate: string;

    constructor(item: RemoteProductItem) {
        this._id = item.id;
        this._name = item.name;
        this._description = item.description;
        this._logo = item.logo;
        this._releaseDate = convertToSlashedDate(item.date_release);
        this._revisionDate = convertToSlashedDate(item.date_revision);
    }

    static toRemote(local: ProductItem): RemoteProductItem {
        return {
            id: local.id,
            name: local.name,
            description: local.description,
            logo: local.logo,
            date_release: convertToDashedDate(local.releaseDate),
            date_revision: convertToDashedDate(local.revisionDate),
        };
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get logo() {
        return this._logo;
    }

    get releaseDate() {
        return this._releaseDate;
    }

    get revisionDate() {
        return this._revisionDate;
    }
}
