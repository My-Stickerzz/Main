# Dynamic E-Commerce Application with Shopping Cart and Checkout System

## Overview

This project is a dynamic e-commerce web application that combines features like dynamic product fetching, product filtering, a shopping cart system, and a checkout process with user details collection. The application allows users to browse products, add them to a cart, apply tiered pricing, and proceed to checkout. The order data is sent to Google Sheets for record-keeping.

## Key Features

### 1. **Pricing Structure**
   - **Tiered Pricing**:
     - **Tier 1**: $0.750 per item (for quantities up to 39).
     - **Tier 2**: $0.600 per item (for quantities between 40 and 80).
     - **Tier 3**: $0.500 per item (for quantities above 80).
   - **Minimum Purchase**: The minimum number of items required to complete the purchase is 12.

### 2. **Color Scheme**
   - Custom color palette for consistent visual design:
     - **Primary**: Gold (`#ffac33`)
     - **Secondary**: Dark Gold (`#b87a00`)
     - **Accent**: Bright Gold (`#ffd700`)
     - **Dark**: Black (`#000000`)
     - **Light**: White (`#ffffff`)
     - **Warning**: Orange (`#ff9800`)
     - Additional grayscale tones for backgrounds and text.

### 3. **Product Fetching and Caching**
   - Product data is fetched from a Google Apps Script endpoint (`PRODUCTS_URL`) and cached for 30 minutes to enhance performance and reduce network requests.
   - A fallback mechanism ensures that cached data from `localStorage` is used in case of a network failure.

### 4. **Product Display and Pagination**
   - Products are displayed in a grid layout with pagination.
   - Users can view products across multiple pages, with a fixed number of products displayed per page (`PRODUCTS_PER_PAGE`).
   - Each product is represented as a card with an image, description, and price.

### 5. **Product Filtering by Theme**
   - Users can filter products by theme. Each product has tags representing themes, and the user can dynamically filter products based on selected themes.
   - Filtering is done using checkboxes that update the displayed products in real-time.

### 6. **Search Functionality**
   - The search bar allows users to filter products by name, with a message shown when no products match the search query.

### 7. **Add to Cart and Cart Management**
   - Users can add products to their cart by clicking an "Add to Cart" button.
   - The cart updates dynamically, and users can view, remove, and modify the quantity of items in the cart.

### 8. **Product Description Modal**
   - Clicking on a product opens a modal displaying a larger image and detailed description. This is implemented using SweetAlert with custom styling.
   - The modal design follows the application's theme for a seamless user experience.

### 9. **SweetAlert Custom Styling**
   - SweetAlert modals are styled with custom colors to match the overall design of the application. This enhances user interactions during product previews and checkout.

### 10. **Mobile Responsiveness**
   - The product grid and layout are fully responsive, adjusting to various screen sizes to ensure a smooth experience on mobile, tablet, and desktop devices.

### 11. **Scroll-to-Top Button**
   - A button appears after scrolling 200 pixels down, allowing users to easily return to the top of the page.

## Shopping Cart and Checkout Features

- **Add Products**: Add products to the cart and adjust quantities.
- **Free Sticker**: A free sticker is added automatically for every purchase.
- **Checkout Validation**: Ensures that the cart meets the minimum purchase requirement.
- **Collect User Details**: Collects name, phone number, address, and other details from users during checkout.
- **Data Submission**: Sends order data to Google Sheets for processing and record-keeping.

## Code Structure

- **Constants**: Defines pricing tiers, minimum purchase limits, color scheme, and the product API URL.
- **Product Fetching**: Implements logic to fetch products from the server and cache them for efficiency.
- **Product Display**: Handles pagination, filtering, and the grid layout of products.
- **Shopping Cart**: Manages the cart, including adding, removing, and updating products.
- **Checkout and User Data Collection**: Handles the checkout process, including user details and order validation.
- **Google Sheets Integration**: Sends purchase data to Google Sheets using an XMLHttpRequest.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2. Install dependencies (if applicable):

    ```bash
    npm install
    ```

3. Set up Google Sheets API and script URL for sending data or modify the code to match your backend.

## Usage

1. **Adding Products to the Cart**: Use the `addToCart` function to add products to the cart. It updates the cart with the product name, price, and quantity.

2. **Viewing and Modifying the Cart**: Use the `openCart` function to display the cart in a SweetAlert2 modal. From here, users can update item quantities, remove products, or proceed to checkout.

3. **Checkout Process**: The `checkout` function validates the cart, checks if the minimum purchase requirement is met, and prompts the user for their details.

4. **Sending Data to Google Sheets**: The `sendProductToGoogleSheets` function sends the order details and user information to Google Sheets via an XMLHttpRequest.

## Functions

### `validatePurchase()`

Checks if the cart meets the minimum purchase requirement or if a pack item is added.

### `addToCart(productName, price, quantity)`

Adds a product to the cart. Updates the quantity if the product already exists.

### `openCart()`

Opens a modal to view and modify cart contents.

### `removeFromCart(productName)`

Removes a product from the cart.

### `updateCount(productName, newCount)`

Updates the quantity of a product in the cart.

### `promptUserData(callback)`

Prompts the user for their details (name, phone, address) before completing the checkout.

### `addFreeSticker()`

Automatically adds a free sticker to the cart.

### `checkout()`

Validates the cart and prompts the user to confirm their purchase, sending the data to Google Sheets upon confirmation.

### `sendProductToGoogleSheets(productName, price, count, userData)`

Sends product and user details to Google Sheets.

## Customizing

### Modifying the Google Sheets Script URL

Change the `scriptUrl` variable in the `sendProductToGoogleSheets` function to your Google Apps Script URL.

### Customizing Product Categories

You can adjust the `addFreeSticker` function to add stickers based on product categories or other logic.

### Styling the Cart and Modals

Adjust the appearance of the cart and SweetAlert modals using SweetAlert2 options and your custom CSS.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

