# Find Nearby Cafes 🏙️☕

Hi! This is my project where I built a simple web app to show nearby cafes on a map using **React** and **Leaflet.js**.  
The app detects my current location, displays it on the map, and shows markers for multiple cafes from a static JSON file. Clicking a marker shows the cafe's name.

---

## What I Built

- On loading the app, it asks for my browser location and centers the map on it.
- Shows a marker for my current location.
- Reads a static JSON file (`cafes.json`) containing coordinates and names of cafes.
- Displays a marker for each cafe on the map.
- Clicking a cafe marker shows a popup with the cafe’s name.

---

## Prerequisites

Before running this project, I made sure to have:

- [Node.js](https://nodejs.org/en/) & npm installed
- [Git](https://git-scm.com/) installed
- A modern browser (Chrome, Firefox, Edge)

---

## How I Ran the Project Locally

1. **Clone the repository**

git clone https://github.com/your-username/find-nearby-cafes.git
cd find-nearby-cafes

2. **Install dependencies**
   
   npm install
   
3. **Start the development server**
   
   npm run dev
   
5. Open the URL shown in the terminal (usually http://localhost:5173) to see the app.

## How I Ran Tests
I used Vitest to test my project. To run the tests, I simply did:

npm run test


The tests I wrote include:

1. Checking that the JSON data for cafes is parsed correctly.

2. Verifying that cafe markers are rendered on the map.

## Assumptions & Design Choices I Made

1. I chose Leaflet.js free tiles to display the map.

2. I used a static JSON file for cafe data instead of fetching from an API to keep it simple.

3. Map markers and popups are managed using React state.

4. The app focuses on user location + static cafes only.

## Assumptions & Design Choices I Made

1. React + JavaScript

2. Leaflet.js for maps

3. Vitest for testing

4. Vite for project bundling

