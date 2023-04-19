/**
 * Card class used for prop of Card components
 */
export class CardClass {
    /**
     * Creates a new instance of the Card.
     * @param {string} _title - The initial title value.
     * @param {string} _desc - The initial description value.
     */
    constructor(private _title: string, private _desc: string) {}

    /**
     * Gets the current title value.
     * @returns {string} The current title value.
     */
    get title(): string {
        return this._title;
    }

    /**
     * Sets the title value.
     * @param {string} value - The new title value.
     */
    set title(value: string) {
        this._title = value;
    }

    /**
     * Gets the current description value.
     * @returns {string} The current description value.
     */
    get desc(): string {
        return this._desc;
    }

    /**
     * Sets the description value.
     * @param {string} value - The new description value.
     */
    set desc(value: string) {
        this._desc = value;
    }
}