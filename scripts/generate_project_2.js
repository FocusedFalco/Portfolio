const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

async function generatePdf() {
  const htmlPath = path.join(__dirname, 'report_no_vis.html');
  const pdfPath = path.join('/Users/rakshitraj/Downloads/project_2.pdf');

  console.log('Reading HTML file...');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  console.log('Launching browser...');
  const browser = await playwright.chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Setting page content...');
  await page.setContent(htmlContent);

  console.log('Waiting for resources to load...');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  console.log('Generating PDF...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '25mm',
      bottom: '25mm',
      left: '20mm',
      right: '20mm'
    },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-size: 8px; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; width: 100%; display: flex; justify-content: space-between; padding: 0 20mm; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">
        <span style="font-weight: 500;">STUDENT ACADEMIC PERFORMANCE ANALYSIS</span>
        <span>SQL & TABLEAU INSIGHTS</span>
      </div>
    `,
    footerTemplate: `
      <div style="font-size: 8px; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; width: 100%; display: flex; justify-content: space-between; padding: 0 20mm; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 5px;">
        <span>CONFIDENTIAL / RESEARCH REPORT</span>
        <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
      </div>
    `
  });

  console.log('Closing browser...');
  await browser.close();

  console.log(`PDF successfully generated at: ${pdfPath}`);
}

generatePdf().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
