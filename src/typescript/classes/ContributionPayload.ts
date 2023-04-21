import {conWorkflows} from "../enums/enums";

export class ContributionPayload {
    constructor(
        public includeCoC: boolean = true,
        public linkToCoC:string = "CODE_OF_CONDUCT.md",
        public linkToCV: string = "CONVENTIONS.md",
        public includeCredit:boolean = false,
        public includeNC: boolean = true,
        public includeCV: boolean = true,
        public ghProj: boolean = true,
        public emojis: boolean = false,
        public workflow: conWorkflows = 0
    ) {}

    private genWorkflow(): string {
        switch(this.workflow) {
            case conWorkflows.GITHUB_WORKFLOW:
                return "Getting started\n" +
                    "\n" +
                    "The idea for this template is taken from the [GitHub docs CONTRIBUTING.md](https://github.com/github/docs/blob/main/CONTRIBUTING.md)\n" +
                    "\n" +
                    "### Issues\n" +
                    "\n" +
                    "#### Create a new issue\n" +
                    "\n" +
                    "If you spot a problem with this project, search if an issue already exists. If a related issue doesn't exist, you can open a new issue using a relevant issue form.\n" +
                    "\n" +
                    "#### Solve an issue\n" +
                    "\n" +
                    "Scan through our existing issues to find one that interests you. You can narrow down the search using `labels` as filters. See Labels for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.\n" +
                    "\n" +
                    "### Commit your update\n" +
                    "\n" +
                    `Commit the changes once you are happy with them. Don't forget to self-review to speed up the review process.${(this.includeCV) ? `Make sure that your commits follow the [CONVENTIONS.md](${ this.linkToCV === "" ? "CONVENTIONS.md" : this.linkToCV }})` : ""}\n` +
                    "\n" +
                    "### Pull Request\n" +
                    "\n" +
                    "When you're finished with the changes, create a pull request, also known as a PR.\n" +
                    "\n" +
                    "- Fill the Pull Request template so that we can easily review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.\n" +
                    "- Link PR to issue if you are solving one.\n" +
                    "- Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.\n" +
                    "- We may ask for changes to be made before a PR can be merged. Be ready to respond to any comments we might have.\n" +
                    "- As you update your PR and apply changes, mark each conversation as resolved.";
            case conWorkflows.PRAX_WORKFLOW:
                return `### ${(this.emojis ? "📑" : "")} Conventions and rules: \n` +
                    "\n" +
                    `** ${(this.emojis ? "⚠️" : "")} You MUST follow the following rules when contributing to this project:**\n` +
                    "\n" +
                    "- Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) rules\n" +
                    "  - This project defines additional scopes and types you can use.\n" +
                    "  - The `<description>` MUST be written in infinitive verb tense\n" +
                    "- Follow coding standards\n" +
                    "  - You may not contribute code that is not well documented or code that is not working as intended and/or not working at all.\n" +
                    "- Use pull requests to submit contributions\n" +
                    "  - Changes may not be pushed directly to `main` or `stable`, instead well-documented Merge Requests shall be opened\n" +
                    "\n" +
                    "**To be sure that your code is of acceptable quality**, read the [conventions of this repository](CONVENTIONS.md). Any additions that do not follow these rules will likely be denied ⛔️\n" +
                    "\n" +
                    `### ${(this.emojis ? "📝" : "")} How to Contribute\n` +
                    "\n" +
                    "There are several ways to contribute to Praxidike's Website. You can:\n" +
                    "\n" +
                    "- Alert the developers\n" +
                    "  - Submit bug reports\n" +
                    "  - Submit feature requests\n" +
                    "  - Open issues (that follow the templates and conventions)\n" +
                    "- Submit code contributions\n" +
                    "- Fork the project\n" +
                    "\n" +
                    "### Contributing via Forking\n" +
                    "\n" +
                    "To get started contributing, please follow these steps:\n" +
                    "\n" +
                    "1. Fork the repository and clone it to your local machine.\n" +
                    "2. Set up the development environment and install any required dependencies.\n" +
                    "3. Push your changes to your fork and submit a pull request.\n" +
                    "\n" +
                    (this.includeCV ? `Make sure that your commits follow the [CONVENTIONS.md](${ this.linkToCV === "" ? "CONVENTIONS.md" : this.linkToCV })\n` : "") +
                    "\n" +
                    `### ${(this.emojis ? "❤️" : "")} Code of Conduct\n` +
                    "\n" +
                    "We expect all contributors to follow our code of conduct when interacting with others in the community. Please read the [code of conduct](CODE_OF_CONDUCT.md) before contributing.";
            default:
                return "";
        }
    }

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
            + (this.includeNC ? "\n## New Contributors\n" +
                "\n" +
                "It is good to see new contributors who are eager to contribute to the open-source community. Make sure to first read our [README](README.md) first. In accordance with the GitHub's CONTRIBUTING guides, we list the following resources to help you begin contributing conventionally.\n" +
                "\n" +
                "- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)\n" +
                "- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)\n" +
                "- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)\n" +
                "- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)" : "")
            + "\n\n"
            + (this.ghProj ? "**GitHub projects integration (for contributors):** Keep an eye on the GitHub project link to this repository to see whether the issue you have is already worked on, requires attention or help and what tasks can you contribute to.\n" : "")
            + "\n\n"
            + this.genWorkflow();
    }
}