import {exBranches, exCommits, exIssues, exWorkflows} from "../enums/enums";

export class ConventionsPayload {
    commitValue: number;
    branchValue: number;
    issuesValue: number;
    strictCommits: boolean;
    workflowsValue: number;

    includeLinkToCoC: boolean;
    linkToCoC: string;
    includeCredit: boolean;
    includeCR: boolean;

    includeGHProj: boolean;
    includeAssignees: boolean;
    includeLabels: boolean;
    includeSpamPrev: boolean;

    stableTagged: boolean;

    /**
     * Constructor for Payload class
     */
    constructor() {
        this.commitValue = 0;
        this.branchValue = 0;
        this.issuesValue = 0;
        this.strictCommits = false;

        // Step 1
        this.includeLinkToCoC = false
        this.linkToCoC = "CODE_OF_CONDUCT.md";
        this.includeCredit = false;
        this.includeCR = true;

        // Step 2
        this.includeGHProj = false;
        this.workflowsValue = 0;

        // Step 3
        this.includeAssignees = true;
        this.includeLabels = true;
        this.includeSpamPrev = false;

        // Step 4
        this.stableTagged = true;
    }

    genWorkflow():string {
        switch (this.workflowsValue) {
            case exWorkflows.CONV_WORKFLOW:
                return "1. Locate the issue (missing feature, bug, etc.) and open a well-documented issue about it.\n" +
                    "2. Branch out from the **correct branch** and use the branch naming convention specified below.\n" +
                    "3. Commit your changes in a controlled and well-manner. Use the convention for naming your commits.\n" +
                    "4. Open a **Merge Request** and if possible request reviews from other developers."+
                    "\n"
            case exWorkflows.PRAX_WORKFLOW:
                return "1. List out tasks from the backlog as issues.\n" +
                    "2. Add any newly appeared issues (missing features, bugs, performance related etc.)\n" +
                    "3. Branch out from the **correct branch** and use the branch naming convention specified below.\n" +
                    "4. Open a work in progress **Merge Request** and request reviews from other developers.\n" +
                    "5. Commit your changes in a controlled and well-manner. Use the convention for naming your commits.\n" +
                    "6. After reviewing the changes, merge your request"+
                    "\n"
            default:
                return "";
        }
    }

    genIssue():string {
        switch(this.issuesValue) {
            case exIssues.CONV_STANDARD:
                return "\n" +
                    "1. The issues must follow the naming convention `<TYPE>: <Title>`:\n" +
                    "   * The `<Title>` should begin with an uppercase letter and briefly describe the issue\n" +
                    "2. The body of an issue must follow the provided templates or should adhere to their structure iff there is no template available for this type of issue. \n \n ";
            case exIssues.PRAX_ISSUES:
                return "\n" +
                    "1. The issues must follow the naming convention `[<TYPE>] <Title>`:\n" +
                    "   * The `[<TYPE>]` can be one of the following:\n" +
                    "     * **!!!! INCLUDE YOUR TYPES HERE !!!!**\n" +
                    "   * The `<Title>` should begin with an uppercase letter and briefly describe the issue\n" +
                    "2. The body of an issue must follow the provided templates or should adhere to their structure iff there is no template available for this type of issue. \n \n  ";
            default:
                return "";
        }
    }

    genBranch():string {
        switch(this.branchValue) {
            case exBranches.CONV_BRANCHES:
                return "\n" +
                    "Most of the branch conventions are taken from the [branching standards & conventions gist](https://gist.github.com/digitaljhelms/4287848).\n" +
                    "\n" +
                    "1. **Branches follow the below-specified logic:**\n" +
                    "\n" +
                    "   | Instance        | Branch     | Branches from | Accepts from               | Description                                                                                                                                                                |\n" +
                    "   |-----------------|------------|---------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n" +
                    "   | Stable          | `stable`   | -             | Working & Hotfixes         | Branch for stable code, deployed to production. Interacted with only on well-tested updates.                                                                               |\n" +
                    "   | Working         | `main`     | -             | Features/Issues & Hotfixes | The main working branch that encapsulated current development. Accepts `features` and `hotfix` merges.  Issues on this branch must be solved before publishing to `stable` |\n" +
                    "   | Features/Issues | `topic-*`  | main          | -                          | Used when developing a new feature or an enhancement OR a bug fix that could be implemented on a later stage                                                               |\n" +
                    "   | Hotfixes        | `hotfix-*` | stable        | -                          | Fixes that must be implemented immediately upon                                                                                                                            |\n" +
                    "\n" +
                    "2. **Branches must follow the following naming conventions:**\n" +
                    "    * `stable` - always represents the latest code deployed to production\n" +
                    "    * `main` - always reflects a state with the latest delivered development changes for the next release\n" +
                    "      * a developer branches and merges from `main`\n" +
                    "    * `<issue number>-feature-<name>` - logically isolated changes related to a specific feature or user story\n" +
                    "    * `<issue number>-bugfix-<name>` - changes related to fixing a specific bug\n" +
                    "    * `<(optional) issue_number>-hotfix-<name>` - changes related to fixing a critical bug in the production environment";
            case exBranches.GL:
                return "\n" +
                    "Most of the branch conventions are taken from the [branching standards & conventions gist](https://gist.github.com/digitaljhelms/4287848).\n" +
                    "\n" +
                    "1. **Branches follow the below-specified logic:**\n" +
                    "\n" +
                    "   | Instance        | Branch     | Branches from | Accepts from               | Description                                                                                                                                                                |\n" +
                    "   |-----------------|------------|---------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n" +
                    "   | Stable          | `stable`   | -             | Working & Hotfixes         | Branch for stable code, deployed to production. Interacted with only on well-tested updates.                                                                               |\n" +
                    "   | Working         | `main`     | -             | Features/Issues & Hotfixes | The main working branch that encapsulated current development. Accepts `features` and `hotfix` merges.  Issues on this branch must be solved before publishing to `stable` |\n" +
                    "   | Features/Issues | `topic-*`  | main          | -                          | Used when developing a new feature or an enhancement OR a bug fix that could be implemented on a later stage                                                               |\n" +
                    "   | Hotfixes        | `hotfix-*` | stable        | -                          | Fixes that must be implemented immediately upon                                                                                                                            |\n" +
                    "\n" +
                    "2. **Branches must follow the following naming conventions:**\n" +
                    "    * `stable` - always represents the latest code deployed to production\n" +
                    "    * `main` - always reflects a state with the latest delivered development changes for the next release\n" +
                    "      * a developer branches and merges from `main`\n" +
                    "    * `<issue number>-<name>` - logically isolated changes related to a specific feature or user story\n" +
                    "    * `<issue number>-<name>` - changes related to fixing a specific bug\n" +
                    "    * `<(optional) issue_number>-<name>` - changes related to fixing a critical bug in the production environment";
            default:
                return "";
        }
    }

    genCommit():string {
        switch(this.commitValue) {
            case exCommits.CONV_COMMITS:
                return "1. **Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standards**.\n" +
                    "\n" +
                    "    ```markdown\n" +
                    "    <type>[optional scope]: <description>\n" +
                    "    \n" +
                    "    [optional body]\n" +
                    "    \n" +
                    "    [optional footer(s)]\n" +
                    "    ```\n" +
                    "\n" +
                    "    Here are some additional rules that abide to the original ones but are focused on this repository:\n" +
                    "    * The `<type>` keyword could be one of the following **nouns**:\n" +
                    "      * `feat` - a new feature is introduced in the changes\n" +
                    "      * `fix` - a bug fix has occurred\n" +
                    "      * **⚠️⚠️⚠️ INCLUDE OUR TYPES HERE ⚠️⚠️⚠️**\n" +
                    "    * The `[optional scope]` can be one of the following (or if reasonable a new one). Keep in mind that points to what the commit is focused on and not all changes must be in this specific scope (you may also do small changes in other files too):\n" +
                    "        * **⚠️⚠️⚠️ YOU MAY INCLUDE SCOPES HERE ⚠️⚠️⚠️**\n" +
                    "    * The `<description>` must be in lower-case and in imperative\n" +
                    "\n" +
                    "2. **Commits must be**\n" +
                    "   * **focused** - a coherent change to the system is aggregated by commits that only affect a small number of files.\n" +
                    "   * **isolated** - each commit should ideally contain changes that are related to a single feature, bug fix, or refactoring task\n" +
                    "\n";
            case exCommits.PRAX_COMMITS:
                return "1. **Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standards**.\n" +
                    "\n" +
                    "    ```markdown\n" +
                    "    <type>(scope): <description>\n" +
                    "    \n" +
                    "    [optional body]\n" +
                    "    \n" +
                    "    [optional footer(s)]\n" +
                    "    ```\n" +
                    "\n" +
                    "    Here are some additional rules that abide to the original ones but are focused on this repository:\n" +
                    "    * The `<type>` keyword could be one of the following **nouns**:\n" +
                    "      * `feat` - a new feature is introduced in the changes\n" +
                    "      * `fix` - a bug fix has occurred\n" +
                    "      * **⚠️⚠️⚠️ INCLUDE OUR TYPES HERE ⚠️⚠️⚠️**\n" +
                    "    * The `[optional scope]` can be one of the following (or if reasonable a new one). Keep in mind that points to what the commit is focused on and not all changes must be in this specific scope (you may also do small changes in other files too):\n" +
                    "        * **⚠️⚠️⚠️ YOU MAY INCLUDE SCOPES HERE ⚠️⚠️⚠️**\n" +
                    "    * The `<description>` must be in lower-case and in imperative\n" +
                    "\n" +
                    "2. **Commits must be**\n" +
                    "   * **focused** - a coherent change to the system is aggregated by commits that only affect a small number of files.\n" +
                    "   * **isolated** - each commit should ideally contain changes that are related to a single feature, bug fix, or refactoring task\n" +
                    "\n";
            default:
                return "";
        }
    }

    // TODO MASSIVE RESTRUCTURING AND OPTIMIZATION
    generate():string {
        return "<!-- CONVENTIONS AND RULES WHEN DEVELOPING IN THIS REPOSITORY -->\n" +
            (this.includeCredit ?
                "<!-- Template by Zakrok09 (https://github.com/zakrok09) -->\n" +
                "<!-- member of TeamPraxidike (https://github.com/TeamPraxidike) -->\n" : "") +
            "\n" +
            "# Rules and conventions\n" +
            "\n" +
            "This document will describe rules that MUST be followed by contributors to this project during development and coding. " +
            (this.includeLinkToCoC ? "The document [Code of Conduct](" + (this.linkToCoC === "" ? "CODE_OF_CONDUCT.md" : this.linkToCoC) + ") focuses more on rules regarding the behaviour of Contributors.": "") +
            "\n \n" +
            "## Code contribution workflow\n" +
            "\n" +
            "Contributions should follow the correct order of steps. This way the project development will remain of consistent structure and workflow.\n" +
            "\n" +
            this.genWorkflow() +
            "\n" +
            (this.includeGHProj ? "**GitHub projects integration (for repo members):** it is of great importance to utilize the GitHub Projects tool when working in this project. Use the provided columns and set deadlines assignees to the cards added in the Project. Cards are added via issues or created manually to encapsulate a specific requirement.\n" : "") +
            "\n" +
            "### Issues conventions\n" +
            "\n" +
            "Issues are a great way to contribute to the project and to keep track of its future updates.\n" +

            this.genIssue()

            + (this.includeAssignees ? "Upon creating an issue, the author must assign it to a repository developer unless the author is an outside contributor. " : "")

            + (this.includeLabels ? "Upon creating an issue, the author must label the issue with the appropriate labels and categorize the issue. " : "")

            + (this.includeSpamPrev ? "Spamming issues or in any other way breaking the Code of Conduct may result in a ban or mute. " : "")

            +

            "\n \n### Branch conventions\n" +

            this.genBranch() +

            (this.stableTagged ? "\n\nThe `stable` branch must be tagged and each merge request to it shall result in a new tag. " : "")

            +
            "\n \n### Commit conventions\n" +
            "\n" +
            "Commits must abide the following set of rules:\n" +
            "\n" +

            this.genCommit() +

            "### Merge request conventions\n" +
            "\n" +
            "1. Merge requests MUST adhere to the branch merging conventions specified above.\n" +
            "2. Merge requests MUST follow the `pull_request_template.md` and provide descriptive changelog\n" +
            "3. Branches may only be merged into `stable` iff they do not break it.\n" +
            "\n" +
            "## Comments & Reviews\n" +
            "\n" +
            "### Comments\n" +
            "\n" +
            "1. **Comments must follow the rules written in the [Code of Conduct](CODE_OF_CONDUCT.md)**.\n" +
            "2. Comments must not be spam messages.\n" +
            "3. Comments may include meme references.\n" +
            "\n" +
            "### Reviews\n" +
            "\n" +
            "1. Merge requests must be reviewed by at least one developer before being merged\n" +
            "2. Reviews MUST be descriptive and **MUST NOT criticise the developer in any unconstructive or derogatory way.**\n" +
            "3. Critics should be well-argued and provoke discussion rather than insulting the developer.\n"
    }
}