# Ecommerce-Product-Page

# E-commerce Product Page

A responsive e-commerce product page with interactive features including image gallery, cart functionality, and responsive navigation.

![E-commerce Product Page Screenshot](./images/screenshot.jpg)

## Features


- **Product Gallery**: Interactive image gallery with thumbnail selection
- **Shopping Cart**: Dynamic cart functionality with add, remove, and checkout options
- **Mobile Navigation**: Hamburger menu for smaller screens
- **Quantity Selection**: Interactive quantity selector before adding to cart
- **Confirmation Overlay**: Thank you message with in-store pickup confirmation

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## Project Structure

```
├── index.html
├── style.css
├── script.js
├── images/
│   ├── favicon-32x32.png
│   ├── icon-cart.svg
│   ├── icon-close.svg
│   ├── icon-delete.svg
│   ├── icon-menu.svg
│   ├── icon-minus.svg
│   ├── icon-plus.svg
│   ├── image-avatar.png
│   ├── image-product-1.jpg
│   ├── image-product-1-thumbnail.jpg
│   ├── image-product-2.jpg
│   ├── image-product-2-thumbnail.jpg
│   ├── image-product-3.jpg
│   ├── image-product-3-thumbnail.jpg
│   ├── image-product-4.jpg
│   ├── image-product-4-thumbnail.jpg
│   └── logo.svg
└── README.md
```

## Key Components

### Navigation

- Responsive navigation menu that converts to a hamburger menu on mobile
- Cart icon with dynamic item count indicator

### Product Display

- Main product image with thumbnail gallery
- Product details including company name, product title, and description
- Price display with discount percentage
- Original price display with proper accessibility attributes

### Shopping Cart

- Interactive cart modal
- Add/remove products functionality
- Quantity adjustment
- Total price calculation
- Checkout button

### Confirmation Modal

- Thank you message overlay
- Order confirmation details
- Close button functionality

## Accessibility Features

- Proper semantic HTML structure
- ARIA roles and attributes for improved screen reader experience
- Clear focus states for keyboard navigation
- Alt text for all images
- Appropriate ARIA live regions for dynamic content

## Installation and Usage

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ecommerce-product-page.git
   ```

2. Open `index.html` in your browser to view the project

3. Alternatively, set up a local server:
   ```
   # Using Python
   python -m http.server
   
   # Using Node.js (after installing http-server)
   npx http-server
   ```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Future Enhancements

- Implement product variants (sizes, colors)
- Add product reviews section
- Integrate with backend for actual checkout process
- Add more products and product category pages
- Implement user accounts and wishlist functionality

## Credits

- Design inspired by modern e-commerce platforms
- Icons from custom SVG files
- Product images included in the project directory

## License

[MIT](LICENSE)