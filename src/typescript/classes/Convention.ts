import {exIssues, exBranches, exCommits} from "../enums/enums";

export class Convention {
    commitValue: number;
    branchValue: number;
    issuesValue: number;
    strictCommits: boolean;

    constructor(commitValue: number, branchValue: number, issuesValue: number, strictCommits: boolean) {
        this.commitValue = commitValue;
        this.branchValue = branchValue;
        this.issuesValue = issuesValue;
        this.strictCommits = strictCommits;
    }

}