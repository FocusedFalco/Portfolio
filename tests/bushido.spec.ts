import { test, expect } from "@playwright/test";

test.describe("Bushido Events End-to-End User Flow", () => {
  test("Should complete sign-in, filtering, booking, and registration success flow", async ({ page }) => {
    // 1. Visit root page and verify redirection to signin
    await page.goto("http://localhost:3000");
    await expect(page).toHaveURL(/.*\/auth\/signin/);
    
    // Check page title and structure
    await expect(page.locator("h1")).toContainText("Bushido Events");
    await expect(page.locator("text=Sign In (Imperial College)")).toBeVisible();
    await expect(page.locator("text=Pledge Allegiance (External Allies)")).toBeVisible();

    // 2. Perform student authentication
    await page.click("text=Sign In (Imperial College)");
    await expect(page).toHaveURL(/.*\/dashboard/);

    // Verify global debug hook exists
    const debugHookExists = await page.evaluate(() => typeof (window as any).__bushidoDebugState !== "undefined");
    expect(debugHookExists).toBe(true);

    // 3. Verify Dashboard structure
    await expect(page.locator("h1")).toContainText("The Season of Spirits");
    await expect(page.locator("h2")).toContainText("Upcoming Gatherings");
    await expect(page.locator("text=Zen Garden Design")).toBeVisible();
    await expect(page.locator("text=Katana Crafting Workshop")).toBeVisible();

    // 4. Verify filters work
    // Check 'Martial Arts' category checkbox
    await page.locator("label:has-text('Martial Arts') input[type='checkbox']").check();
    // Wait a brief moment for filtering animation
    await page.waitForTimeout(500);
    // 'Katana Crafting Workshop' should be visible, others should be hidden
    await expect(page.locator("text=Katana Crafting Workshop")).toBeVisible();
    await expect(page.locator("text=Zen Garden Design")).toBeHidden();

    // Uncheck 'Martial Arts' filter
    await page.locator("label:has-text('Martial Arts') input[type='checkbox']").uncheck();
    await page.waitForTimeout(500);

    // 5. Navigate to event details
    // Find the reserve button specifically under Zen Garden Design card
    const card = page.locator("div.group", { hasText: "Zen Garden Design" });
    await card.locator("button:has-text('Reserve')").click();
    await expect(page).toHaveURL(/.*\/events\/zen-garden-design/);

    // 6. Verify Event Details page
    await expect(page.locator("h1")).toContainText("Zen Garden Design");
    await expect(page.locator("text=Event Itinerary")).toBeVisible();
    await expect(page.locator("text=Opening Ceremony")).toBeVisible();
    await expect(page.locator("text=Requirements")).toBeVisible();
    await expect(page.locator("button:has-text('SECURE YOUR SPOT')")).toBeVisible();

    // 7. Go to Registration form
    await page.click("button:has-text('SECURE YOUR SPOT')");
    await expect(page).toHaveURL(/.*\/events\/zen-garden-design\/register/);

    // 8. Fill in registration form
    await page.fill("input#full_name", "Minamoto no Yoshitsune");
    await page.fill("input#dojo", "Imperial Sword School");
    await page.selectOption("select#rank", { label: "Shodan (1st Degree)" });
    
    // Register
    await page.click("button:has-text('Register for the Journey')");
    await expect(page).toHaveURL(/.*\/events\/zen-garden-design\/success/);

    // 9. Verify Success page
    await expect(page.locator("h1")).toContainText("Registration Confirmed");
    await expect(page.locator("text=Your path is set, Warrior")).toBeVisible();
    await expect(page.locator("text=Your Next Path")).toBeVisible();
    // Confirm 3 recommendations are rendered
    const recommendations = page.locator("text=Explore Path");
    await expect(recommendations).toHaveCount(3);

    // 10. Return back to village (dashboard)
    await page.click("button:has-text('Return to Village')");
    await expect(page).toHaveURL(/.*\/dashboard/);

    // Check that we are now marked as registered for Zen Garden Design
    const zenCard = page.locator("div.group", { hasText: "Zen Garden Design" });
    await zenCard.locator("button:has-text('Reserve')").click();
    await expect(page).toHaveURL(/.*\/events\/zen-garden-design/);
    await expect(page.locator("button:has-text('VIEW REGISTRATION')")).toBeVisible();
  });
});
