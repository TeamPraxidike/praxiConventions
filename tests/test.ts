import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('website', () => {
    test('should be browsable', async ({ page }) => {
        // Got to the generator
        await page.goto('/');
        await page.getByRole('link', { name: 'Use Generator' }).first().click();
    });
})

test.describe('homepage', () => {
    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
        await page.goto('/');

        // @ts-ignore
        const accessibilityScanResults = await new AxeBuilder.default({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should have correct title', async ({page}) => {
        await page.goto('/');

        await expect(page).toHaveTitle("Home | praxiConventions");
    })
});

test.describe('conventions generator', () => {
    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
        await page.goto('/generator/conventions');

        // @ts-ignore
        const accessibilityScanResults = await new AxeBuilder.default({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should have correct title', async ({page}) => {
        await page.goto('/generator/conventions');

        await expect(page).toHaveTitle("Conventions Generator | praxiConventions");
    })
});

test.describe('contributions generator', () => {
    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
        await page.goto('/generator/contributions');

        // @ts-ignore
        const accessibilityScanResults = await new AxeBuilder.default({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should have correct title', async ({page}) => {
        await page.goto('/generator/contributions');

        await expect(page).toHaveTitle("Contributions Generator | praxiConventions");
    })
});

test.describe('pull-request generator', () => {
    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
        await page.goto('/generator/pull-requests');

        // @ts-ignore
        const accessibilityScanResults = await new AxeBuilder.default({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should have correct title', async ({page}) => {
        await page.goto('/generator/pull-requests');

        await expect(page).toHaveTitle("Pull Request Generator | praxiConventions");
    })
});
