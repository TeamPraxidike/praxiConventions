import {writable} from "svelte/store";
import {Payload} from "../typescript/classes/Payload";
import {Convention} from "../typescript/classes/Convention";

export const payload = writable(new Payload());
export const convention = writable(new Convention(0,0,0,false));