import { convertToDashedDate, convertToSlashedDate } from "utils/helpers";

export class ProductItem {
    readonly #id: string;
    readonly #name: string;
    readonly #description: string;
    readonly #logo: string;
    readonly #releaseDate: string;
    readonly #revisionDate: string;

    constructor(item: {
        id: string;
        name: string;
        description: string;
        logo: string;
        releaseDate: string;
        revisionDate: string;
    }) {
        this.#id = item.id;
        this.#name = item.name;
        this.#description = item.description;
        this.#logo = item.logo;
        this.#releaseDate = item.releaseDate;
        this.#revisionDate = item.revisionDate;
    }

    static fromRemote(remote: RemoteProductItem) {
        return new ProductItem({
            id: remote.id,
            name: remote.name,
            description: remote.description,
            logo: remote.logo,
            releaseDate: convertToSlashedDate(remote.date_release),
            revisionDate: convertToSlashedDate(remote.date_revision),
        });
    }

    toRemote(): RemoteProductItem {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            logo: this.logo,
            date_release: convertToDashedDate(this.releaseDate),
            date_revision: convertToDashedDate(this.revisionDate),
        };
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get logo() {
        return this.#logo;
    }

    get releaseDate() {
        return this.#releaseDate;
    }

    get revisionDate() {
        return this.#revisionDate;
    }
}
