import {writable} from "svelte/store";
import {ConventionsPayload} from "../typescript/classes/ConventionsPayload";
import {Convention} from "../typescript/classes/Convention";
import {ContributionPayload} from "../typescript/classes/ContributionPayload";

export const conventionsPayload = writable(new ConventionsPayload());
export const contributionsPayload = writable(new ContributionPayload());
export const convention = writable(new Convention(0,0,0,false));