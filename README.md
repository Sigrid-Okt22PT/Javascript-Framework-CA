# Javascript Framework CA – Online Store

![image](https://sigrid-okt22pt-semester-project-2.netlify.app/assets/images/screenshot_webshop.png)

View the hosted website at: [\[javascript-framework-ca-sigrid.netlify.app\]](https://javascript-framework-ca-sigrid.netlify.app/)

## Description

This is a responsive online webshop developed as part of the **JavaScript Frameworks Course Assignment** at Noroff.

The goal of this project is to build a functional frontend webshop using React and TypeScript, applying the concepts learned throughout the course.

Users can browse products, view product details, add items to their shopping cart, adjust quantities, and complete a simulated checkout.

Product data is retrieved from the **Noroff Online Shop API**. This project focuses on frontend development and does not include real payments or order processing.

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Setup and Installation](#setup-and-installation)
- [Code Quality](#code-quality)
- [Usage](#usage)
- [Planning & Design](#planning--design)
- [License](#license)

## Built With

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Zustand
- Noroff Online Shop API
- ESLint
- Node.js & npm
- Netlify

## Setup and Installation

To set up and run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Sigrid-Okt22PT/Javascript-Framework-CA.git
```

### 2. Navigate to the project directory

```bash
cd Javascript-Framework-CA
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the website

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 6. Build for production

```bash
npm run build
```

## Code Quality

This project uses ESLint to help maintain consistent code quality and catch common errors during development.

Run linting with:

```bash
npm run lint
```

## Testing

The project uses Vitest and React Testing Library to test form behaviour and user interactions, following the examples from the course lessons.

The tests cover the contact form's initial rendering and successful submission. The checkout tests check navigation to the success page, displaying the customer's email in success page.

To run the tests in watch mode:

```bash
npm run test
```

To run the tests once:

```bash
npx vitest run
```

## Usage

### Product Browsing

- Browse products on the homepage
- View individual product details
- See product prices, discounts, and ratings
- Search for products

### Shopping Cart

- Add products to the shopping cart
- Increase or decrease product quantities
- Remove products from the cart
- View the total cart price

### Checkout

- Enter customer information
- Complete a simulated checkout
- View an order confirmation page

### Contact

- Access the contact form
- Submit information using validated form fields

## Planning & Design

The project follows the technical requirements defined in the course assignment:

- **Frontend:** React and TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State Management:** Zustand
- **API:** Noroff Online Shop API
- **Hosting:** Netlify

## About this Project

This project is for educational use.
