

import test from "@playwright/test";
import { ELEMENTS } from './Locators/elements'

class LoginPage {
    constructor(page: page) {
        this.page = page;
        this.elements = ELEMENTS;

    }
}