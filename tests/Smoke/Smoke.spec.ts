import { test, expect } from "@playwright/test";

const BASE = "https://www.saucedemo.com/";

test.describe("Smoke test", () => {
  test("Page is accessible", async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle("Swag Labs");
    expect(page.getByPlaceholder("Username")).toBeVisible;
    expect(page.getByPlaceholder("password")).toBeVisible;
    expect(page.getByTestId("login-button")).toBeVisible;
  });
});
