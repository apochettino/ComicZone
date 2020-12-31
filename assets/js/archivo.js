// scroll del home


// intento de carrito n°2.....

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCartButton => {

    addToCartButton.addEventListener('click', addToCartClicked);    
});

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');
 console.log('addToCartClicked -> item', item);

}