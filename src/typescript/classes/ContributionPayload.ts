import type {conWorkflows} from "../enums/enums";

export class ContributionPayload {
    constructor(
        public includeCoC: boolean = true,
        public linkToCoC:string = "CODE_OF_CONDUCT.md",
        public includeCredit:boolean = false,
        public includeNC: boolean = true,
        public workflow: conWorkflows = 0
    ) {}

    public generate():string {
        return "# Welcome to GitHub docs contributing guide <!-- omit in toc -->\n" +
            "\n" +
            "Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:.\n" +
            "\n" +
            "Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.\n" +
            "\n" +
            "In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.\n" +
            "\n" +
            "Use the table of contents icon <img src=\"/contributing/images/table-of-contents.png\" width=\"25\" height=\"25\" /> on the top left corner of this document to get to a specific section of this guide quickly.\n";
    }
}