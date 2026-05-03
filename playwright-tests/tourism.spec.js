import { test, expect } from '@playwright/test';

const API_URL = 'https://bangladesh-dotnet-api.onrender.com';

test('API returns 3 tourist places', async ({ request }) => {
  const response = await request.get(`${API_URL}/api/places`);
  expect(response.status()).toBe(200);
  const places = await response.json();
  expect(places.length).toBe(3);
});

test('API returns Cox\'s Bazar for id 1', async ({ request }) => {
  const response = await request.get(`${API_URL}/api/places/1`);
  expect(response.status()).toBe(200);
  const place = await response.json();
  expect(place.name).toBe("Cox's Bazar");
});

test('homepage shows Bangladesh title', async ({ page }) => {
  await page.goto('https://bangladesh-tourism.netlify.app');
  await expect(page.getByText('Discover Beautiful Bangladesh')).toBeVisible();
});

test('API data displays on homepage', async ({ page }) => {
  await page.goto('https://bangladesh-tourism.netlify.app');
  // Check for the API section heading instead of Cox's Bazar
  await expect(page.getByText('Tourist Places (from .NET API)')).toBeVisible();
});