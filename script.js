// target elements
const cartIcon = document.querySelector('.cart-icon');
const cartcheckoutButton= document.querySelector('.checkout-button');
const overlay = document.querySelector('#confirmationOverlay');
const closeBtn = document.querySelector('.close-btn');
const cartItemCount = document.querySelector('.item-count');
const cartModal = document.querySelector('.cart-modal');
const cartItems = document.querySelector('.cart-items');
const emptyCartMessage = document.querySelector('.empty-cart-message');
const cartItemQuantity = document.querySelector('.cart-item-quantity span');
const cartItemPrice = document.querySelector('.cart-item-price span');
const cartItemTotal = document.querySelector('.cart-item-total');
const deleteCart = document.querySelector('.close-cart');
const CheckoutButton = document.querySelector('.add-to-cart');
const userIcon = document.querySelector('.user-icon');
const decreaseQuantityButton = document.querySelector('.decrease-quantity');
const quantityInput = document.querySelector('.quantity-input');
const increaseQuantityButton = document.querySelector('.increase-quantity');
const imagesOverlay = document.querySelector('.images-overlay');
const mainImage = document.querySelector('.main-image');
const productImages = document.querySelector('.product-images')


const productImagesClone = productImages.cloneNode(true);

console.log(cartItemPrice.innerText)

increaseQuantityButton.addEventListener('click', () => {    
    quantityInput.value = parseInt(quantityInput.value) + 1;
    
    cartItemQuantity.innerText = quantityInput.value;
    cartItemTotal.innerText = `$${(parseInt(quantityInput.value) * parseInt(cartItemPrice.innerText)).toFixed(2)}`;
});

decreaseQuantityButton.addEventListener('click', () => {
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        cartItemCount.innerText = quantityInput.value;
        cartItemQuantity.innerText = quantityInput.value;
        cartItemTotal.innerText = `$${(parseInt(quantityInput.value) * parseInt(cartItemPrice.innerText)).toFixed(2)}`;
    } else {
        quantityInput.value = 0;
        cartItemCount.innerText = 0;
        cartItemQuantity.innerText = 0;
        cartItemTotal.innerText = `$${(parseInt(quantityInput.value) * parseInt(cartItemPrice.innerText)).toFixed(2)}`;
    }
});

deleteCart.addEventListener('click', () => {    
    cartItemCount.innerText = 0;
    
    quantityInput.value = 0;
    cartItemQuantity.innerText = 0;
    cartItemTotal.innerText = `$0.00`;
    cartItems.style.display = 'none';
    emptyCartMessage.hidden = false;
    setTimeout(() => {
        cartModal.style.display = 'none';
    }, 3000);
}); 

cartIcon.addEventListener('click', () => {
    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
    } else {
        cartModal.style.display = 'block';
    }
});



CheckoutButton.addEventListener('click', () => {
    if (parseInt(quantityInput.value) >= 1) {
        cartModal.style.display = 'block';
        cartItems.style.display = 'grid';
        emptyCartMessage.hidden = true;
        cartItemCount.innerText = quantityInput.value;
    } else{
        cartModal.style.display = 'none';
        alert('Please select a quantity greater than 0');
        
    }
});



// overlay
// Show overlay on checkout button click
cartcheckoutButton.addEventListener('click', () => {
    overlay.classList.add('active');
    overlay.querySelector('.confirmation-message').focus(); // Focus for accessibility
  });

  // Close overlay on close button click
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  // Close overlay on Escape key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });

  // Close overlay when clicking outside the message
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.classList.remove('active');
    }
  });



  mainImage.addEventListener('click', () => {
    imagesOverlay.classList.add('images-active');
    productImagesClone.classList.add('clone-style');
    imagesOverlay.appendChild(productImagesClone);
    
  });


  imagesOverlay.addEventListener('click', () => {  
    imagesOverlay.classList.remove('images-active');
    productImagesClone.classList.remove('clone-style');
    imagesOverlay.removeChild(productImagesClone);
  });
