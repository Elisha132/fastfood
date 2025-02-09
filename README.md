Vue FastFood Order App

This is a Vue-based application for handling a fast food ordering system. Users can browse menu items, add them to their cart, review their order summary, enter delivery details, choose payment options, and finalize their order.

Features

Menu Browsing: Displays a list of available food items with images, descriptions, and prices.

Order Management: Allows users to add items to their cart and view an order summary.

Pricing Calculation: Shows food cost, delivery charge, and total cost.

Responsive Design: Works across desktop and mobile devices.

Installation

Prerequisites

Ensure you have the following installed:

Node.js (v14 or later)

npm or yarn

Steps

Clone the repository

git clone https://github.com/your-repository/vue-fastfood-order.git cd fastfood

Install dependencies

npm install

OR
yarn install

Run the development server

ionic serve

The application should now be running at http://localhost:8100/

Build for production

npm run build

OR
API Integration

If using an API, update useApi in OrderSummary.vue:

export default { data() { return { useApi: true, // Set to false for local data }; }, };

Ensure your API is running and replace https://your-api.com/api/orders with your actual API endpoint.

Project Structure

vue-fastfood-order/ │── src/ │ ├── assets/ # Static assets (images, styles, etc.) │ ├── components/ # Reusable Vue components │ ├── views/ # Main pages (Home, Order Summary, Payment, etc.) │ ├── App.vue # Root component │ ├── main.js # Application entry point │── public/ # Static files (favicon, index.html, etc.) │── package.json # Dependencies and scripts │── README.md # Documentation
