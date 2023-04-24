import { afterEach, describe, expect, it} from "vitest";
import {cleanup, getByRole, getByText, render, screen} from '@testing-library/svelte';
import {Card} from "$lib/components/reusable";
import {CardClass} from "$lib/typescript/classes/CardClass";
import {Footer, Header} from "./components/page";
import {ConventionsPicker} from "./components/editors";
import {ResultPanel} from "./components/reusable";

describe('Test Card.svelte', async () => {
    afterEach(() => cleanup());

    it('Test', async () => {
        // Add options to components
        render(Card, {card: new CardClass("Inspiration","Inspiration desc")});
        expect(screen.getByText('Inspiration')).toBeInTheDocument();
        expect(screen.getByText('Inspiration desc')).toBeInTheDocument();
    });
});

describe('Conventions picker', async () => {
    afterEach(() => cleanup());

    it('renders the CoC switch', async () => {
        // Add options to components
        render(ConventionsPicker);
        const {container} = render(ResultPanel);

        const cocButton = screen.getByRole('checkbox', { name: /Code of Conduct/i });
        expect(cocButton).toBeInTheDocument();
    })
})

describe('Header component', async () => {
    afterEach(()=> cleanup());

    it('renders without crashing', () => {
        const { container } = render(Header)
        expect(container).toBeInTheDocument()
    });

    it('displays GitHub link', () => {
        const { getByRole } = render(Header)
        const githubLink = getByRole('link', { name: /github account/i })
        expect(githubLink).toBeInTheDocument()
    });

    it('displays app name', () => {
        const { getByText } = render(Header)
        const appName = getByText(/praxi conventions/i)
        expect(appName).toBeInTheDocument()
    });

    it('links to homepage', () => {
        const { getByText } = render(Header)
        const homepageLink = getByText(/praxi conventions/i)
        expect(homepageLink).toHaveAttribute('href', '/')
    });
})

describe('Footer component', async () => {
    it('should contain the correct list of technologies used', () => {
        const { getByText } = render(Footer);
        expect(getByText('Written in:')).toBeInTheDocument();
    });

    it('should contain the correct link to the GitHub repository', () => {
        const { getByText } = render(Footer);
        expect(getByText('Made By Praxidike. This project is open-source. You can see the source code')).toBeInTheDocument();
        expect((getByText('here') as HTMLAnchorElement).href).toBe('https://github.com/TeamPraxidike/praxiConventions');
    });
})