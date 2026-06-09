const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

async function generatePdf() {
  const htmlPath = path.join(__dirname, 'report.html');
  const pdfPath = path.join(__dirname, '..', 'student_performance_report.pdf');

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
  } else {
    console.warn('Dashboard images not found! Placing empty placeholders.');
    htmlContent = htmlContent
      .replace('{{DASHBOARD_1_BASE64}}', '')
      .replace('{{DASHBOARD_2_BASE64}}', '');
  }

  console.log('Launching browser...');
  const browser = await playwright.chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Setting page content...');
  // Pass base URL as current dir just in case
  await page.setContent(htmlContent, { baseURL: 'file://' + __dirname + '/' });

  console.log('Waiting for resources to load...');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // extra buffer for fonts and images to render

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
