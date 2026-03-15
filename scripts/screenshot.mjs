#!/usr/bin/env node
/**
 * Capture screenshots of the site (desktop + mobile).
 * Requires: npm install playwright
 * Run: npm run dev (in one terminal), then: npm run screenshot
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../screenshots');
const BASE = process.env.SCREENSHOT_URL || 'http://localhost:4321';

async function main() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Desktop
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT, 'desktop-home.png'), fullPage: true });
  console.log('Saved screenshots/desktop-home.png');

  // Mobile (iPhone 14)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT, 'mobile-home.png'), fullPage: true });
  console.log('Saved screenshots/mobile-home.png');

  // Mobile with menu open
  await page.click('.mobile-menu-toggle');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(OUT, 'mobile-menu-open.png') });
  console.log('Saved screenshots/mobile-menu-open.png');

  await browser.close();
  console.log('\nDone. Check the screenshots/ folder.');
}

main().catch((e) => {
  console.error('Error:', e.message);
  console.error('\nMake sure: 1) npm run dev is running  2) npm install playwright');
  process.exit(1);
});
