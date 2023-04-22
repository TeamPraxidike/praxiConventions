export class MetaSnippet {
    constructor(
        private _title:string,
        private _metaDescription:string,
        private _type:string
    )
    {}


    get metaDescription(): string {
        return this._metaDescription;
    }

    get title(): string {
        return this._title;
    }

    get type(): string {
        return this._type;
    }
}