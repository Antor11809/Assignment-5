# Dev Stack Builder

Dev Stack Builder is a React and TypeScript web application where users can explore different development technologies and build their preferred technology stack.

## Live Website

Add your deployed website link here.

## Features

- Explore different development technologies
- Technology data loaded from a JSON file
- Add technologies to Your Stack
- Prevent duplicate technology selection
- Remove individual technologies
- Remove all selected technologies
- Toast notifications for different actions
- Loading state using Suspense
- Shared gradient theme
- Technology icons loaded from JSON

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify

## JSON Data

Technology information is stored inside:

`public/data.json`

Each technology contains:

- id
- name
- category
- description
- icon
- rating
- difficulty
- badge

## How Data Is Loaded

The technology data is fetched from the JSON file and passed to the application as a Promise.

React `use()` and `Suspense` are used to handle the data and loading state.

## Stack Functionality

Users can add technologies to their stack.

A technology cannot be added more than once.

Users can also remove a single technology or clear the complete stack using the Remove All button.

## Toast Notifications

Toast notifications are shown when:

- A technology is added
- A duplicate technology is selected
- A technology is removed
- All technologies are removed

## Installation

```bash
npm install