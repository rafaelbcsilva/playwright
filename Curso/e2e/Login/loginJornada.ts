

import test, { Locator, Page } from "@playwright/test";
import { ELEMENTS } from './Locators/elements'

class LoginPage {

    private readonly page: Page;
    private readonly elements: typeof ELEMENTS

    constructor(page: Page) {
        this.page = page;
        this.elements = ELEMENTS;

    }

}