import {writable} from "svelte/store";
import {Payload} from "../classes/Payload";
import {Convention} from "../classes/Convention";

export const payload = writable(new Payload());
export const convention = writable(new Convention(0,0,0,false));