import {writable} from "svelte/store";
import {Payload} from "../classes/Payload";

export const payload = writable(new Payload());