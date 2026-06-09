const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

async function testRender() {
  const htmlPath = path.join(__dirname, 'report.html');
  const screenshotPath = path.join(__dirname, 'rendered_page_4.png');

  console.log('Reading HTML file...');
  let htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  console.log('Loading and converting dashboard images to Base64...');
  const img1Path = path.join(__dirname, 'dashboard1.png');
  const img2Path = path.join(__dirname, 'dashboard2.png');

  if (fs.existsSync(img1Path) && fs.existsSync(img2Path)) {
    const img1Base64 = fs.readFileSync(img1Path, { encoding: 'base64' });
    const img2Base64 = fs.readFileSync(img2Path, { encoding: 'base64' });

    console.log('Injecting Base64 images into HTML...');
    htmlContent = htmlContent
      .replace('{{DASHBOARD_1_BASE64}}', `data:image/png;base64,${img1Base64}`)
      .replace('{{DASHBOARD_2_BASE64}}', `data:image/png;base64,${img2Base64}`);
  }

  console.log('Launching browser...');
  const browser = await playwright.chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Setting page content...');
  await page.setContent(htmlContent);

  console.log('Waiting for resources to load...');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Let's locate Page 4
  console.log('Finding all .page-section elements...');
  const sections = await page.$$('.page-section');
  console.log(`Found ${sections.length} sections.`);

  if (sections.length >= 4) {
    console.log('Taking screenshot of Section 4...');
    // Section index is 3 (0-indexed)
    await sections[3].screenshot({ path: screenshotPath });
    console.log(`Screenshot saved to: ${screenshotPath}`);
  } else {
    console.log('Section 4 not found!');
  }

  await browser.close();
}

testRender().catch(err => {
  console.error('Error rendering:', err);
  process.exit(1);
});
