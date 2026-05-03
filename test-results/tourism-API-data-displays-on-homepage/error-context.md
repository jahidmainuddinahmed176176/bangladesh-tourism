# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tourism.spec.js >> API data displays on homepage
- Location: playwright-tests\tourism.spec.js:24:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Tourist Places (from .NET API)')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Tourist Places (from .NET API)')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - generic [ref=e4]: 🇧🇩 Explore Bangladesh
    - list [ref=e5]:
      - listitem [ref=e6]:
        - link "Home" [ref=e7] [cursor=pointer]:
          - /url: /
      - listitem [ref=e8]:
        - link "Sylhet" [ref=e9] [cursor=pointer]:
          - /url: /sylhet
      - listitem [ref=e10]:
        - link "Cox's Bazar" [ref=e11] [cursor=pointer]:
          - /url: /coxsbazar
      - listitem [ref=e12]:
        - link "Bandarban" [ref=e13] [cursor=pointer]:
          - /url: /bandarban
  - generic [ref=e14]:
    - heading "Discover Beautiful Bangladesh" [level=1] [ref=e15]
    - paragraph [ref=e16]: Explore the green hills, longest sea beach, and rich cultural heritage
  - generic [ref=e17]:
    - heading "Popular Destinations" [level=2] [ref=e18]
    - generic [ref=e19]:
      - generic [ref=e20] [cursor=pointer]:
        - img "Sylhet" [ref=e21]
        - heading "Sylhet" [level=3] [ref=e22]
        - paragraph [ref=e23]: Tea gardens, rolling hills, and the shrine of Hazrat Shah Jalal
        - button "Explore →" [ref=e24]
      - generic [ref=e25] [cursor=pointer]:
        - img "Cox's Bazar" [ref=e26]
        - heading "Cox's Bazar" [level=3] [ref=e27]
        - paragraph [ref=e28]: World's longest unbroken sea beach — 120km of golden sand
        - button "Explore →" [ref=e29]
      - generic [ref=e30] [cursor=pointer]:
        - img "Bandarban" [ref=e31]
        - heading "Bandarban" [level=3] [ref=e32]
        - paragraph [ref=e33]: Highest peaks, indigenous culture, and the mystical Nilgiri
        - button "Explore →" [ref=e34]
  - generic [ref=e36]: "Error: Failed to fetch"
  - contentinfo [ref=e37]:
    - paragraph [ref=e38]: © 2026 Explore Bangladesh | Discover the beauty
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const API_URL = 'https://bangladesh-dotnet-api.onrender.com';
  4  | 
  5  | test('API returns 3 tourist places', async ({ request }) => {
  6  |   const response = await request.get(`${API_URL}/api/places`);
  7  |   expect(response.status()).toBe(200);
  8  |   const places = await response.json();
  9  |   expect(places.length).toBe(3);
  10 | });
  11 | 
  12 | test('API returns Cox\'s Bazar for id 1', async ({ request }) => {
  13 |   const response = await request.get(`${API_URL}/api/places/1`);
  14 |   expect(response.status()).toBe(200);
  15 |   const place = await response.json();
  16 |   expect(place.name).toBe("Cox's Bazar");
  17 | });
  18 | 
  19 | test('homepage shows Bangladesh title', async ({ page }) => {
  20 |   await page.goto('https://bangladesh-tourism.netlify.app');
  21 |   await expect(page.getByText('Discover Beautiful Bangladesh')).toBeVisible();
  22 | });
  23 | 
  24 | test('API data displays on homepage', async ({ page }) => {
  25 |   await page.goto('https://bangladesh-tourism.netlify.app');
  26 |   // Check for the API section heading instead of Cox's Bazar
> 27 |   await expect(page.getByText('Tourist Places (from .NET API)')).toBeVisible();
     |                                                                  ^ Error: expect(locator).toBeVisible() failed
  28 | });
```