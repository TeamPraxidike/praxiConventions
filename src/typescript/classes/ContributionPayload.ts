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
        return "<!-- CONTRIBUTING RULES AND GUIDELINES WHEN DEVELOPING IN THIS REPOSITORY -->\n" +
            (this.includeCredit ?
                "<!-- Template by Zakrok09 (https://github.com/zakrok09) -->\n" +
                "<!-- member of TeamPraxidike (https://github.com/TeamPraxidike) -->\n" : "") +
            "\n" +
            "# Welcome to GitHub docs contributing guide <!-- omit in toc -->\n" +
            "\n" +
            "Thank you for intereset in contributing to our project!" +
            (this.includeCoC ? "\n" +
                `Read our [Code of Conduct](${ this.linkToCoC === "" ? "CODE_OF_CONDUCT.md" : this.linkToCoC }) to keep our community approachable and respectable.` : "") +
            "\n\n" +
            "In this guide you will get an overview of the contribution workflow. Changes made by your or your team will have to abide by the rules written here so make sure you carefully read this file. \n"
            + (this.includeNC ? "\n##New Contributors\n" +
                "\n" +
                "It is good to see new contributors who are eager to contribute to the open-source community. Make sure to first read our [README](README.md) first. In accordance with the GitHub's CONTRIBUTING guides, we list the following resources to help you begin contributing conventionally.\n" +
                "\n" +
                "- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)\n" +
                "- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)\n" +
                "- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)\n" +
                "- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)" : "");
    }
}