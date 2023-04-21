import {writable} from "svelte/store";
import {ConventionsPayload} from "../typescript/classes/ConventionsPayload";
import {ContributionPayload} from "../typescript/classes/ContributionPayload";

export const conventionsPayload = writable(new ConventionsPayload());
export const contributionsPayload = writable(new ContributionPayload());