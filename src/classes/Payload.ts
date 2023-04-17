export class Payload {
    commitValue: number;
    branchValue: number;
    issuesValue: number;
    strictCommits: boolean;

    /**
     * Constructor for Payload class
     */
    constructor() {
        this.commitValue = 0;
        this.branchValue = 0;
        this.issuesValue = 0;
        this.strictCommits = false;
    }
}