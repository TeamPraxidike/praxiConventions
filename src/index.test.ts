import { afterEach, describe, expect, it} from "vitest";
import {cleanup, render, screen} from '@testing-library/svelte';
import {Card} from "$lib/components/reusable";
import {CardClass} from "$lib/typescript/classes/CardClass";

describe('Test Card.svelte', async () => {
    afterEach(() => cleanup());

    it('Test', async () => {
        // Add options to components
        render(Card, {card: new CardClass("Inspiration","Inspiration desc")});
        expect(screen.getByText('Inspiration')).toBeInTheDocument();
        expect(screen.getByText('Inspiration desc')).toBeInTheDocument();
    })
});