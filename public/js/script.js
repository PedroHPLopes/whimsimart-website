// Function to display the item selection menu
function showItemSelectionMenu(item) {
  const itemSelectionMenu = document.getElementById('item-selection-menu');
  const itemDetails = document.getElementById('item-details');
  const itemsContainer = document.querySelector('.items-container');
  const availableItemsHeading = document.querySelector('h1');
  
  

  // Hide the item list
  itemsContainer.style.display = 'none';
  availableItemsHeading.style.display = 'none';

  // Populate the item details
  itemDetails.innerHTML = `
    <img src="${item.image}" alt="${item.name}" style="width: 200px; height: auto;" />
    <h2>${item.name}</h2>
    <p>Price: $${item.price}</p>
    <p>${item.description}</p>
  `;

  // Show the item selection menu
  itemSelectionMenu.style.display = 'block';
}


function hideItemSelectionMenu() {
  const itemSelectionMenu = document.getElementById('item-selection-menu');
  const itemsContainer = document.querySelector('.items-container');
  const availableItemsHeading = document.querySelector('h1');

  // Hide the item selection menu
  itemSelectionMenu.style.display = 'none';

  // Show the item list
  itemsContainer.style.display = 'grid';
  availableItemsHeading.style.display = 'grid';
}


// Function to handle adding an item to the cart
function handleAddToCart(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Replace with your desired logic to add the item to the cart
  // For now, just display a message
  displayMessage('Item Added to Cart', 'success', 'cart-message-container');
}

// Function to handle clicking the back button
function handleBackButton() {
  hideItemSelectionMenu();
}

// Function to handle form submission for the login page
function handleLoginFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve the values entered in the email and password fields
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if both email and password fields are filled
  if (email !== '' && password !== '') {
    // Display a success message for 3 seconds
    displayMessage('Login Successful', 'success', 'message-container');
    setTimeout(() => {
      // Redirect to the items page (replace with your desired redirection logic)
      window.location.href = 'items.html';
    }, 1000);
  } else {
    // Display an error message for 3 seconds
    displayMessage('Please fill both Email and Password', 'error', 'message-container');
  }

  // Clear the input fields
  emailInput.value = '';
  passwordInput.value = '';
}

// Update the handleResetFormSubmission function

function handleResetFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve the value entered in the email field
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  // Check if the email field is empty
  if (email === '') {
    displayMessage('Please enter your email', 'error', 'reset-message-container');
    emailInput.value = '';
  } else {
    displayMessage('Password Recovery Email Sent', 'success', 'reset-message-container');
    emailInput.value = '';
    setTimeout(() => {
      messageElement.remove();
    }, 2000);
    window.location.href = 'index.html';
  }

}

// Update the displayMessage function

// Update the displayMessage function

function displayMessage(message, className, containerId) {
  const messageContainer = document.getElementById(containerId);

  // Create a new message element
  const messageElement = document.createElement('div');
  messageElement.textContent = message;

  // Apply class based on the provided className
  messageElement.classList.add(className === 'success' ? 'message-success' : 'message-error');

  // Append the message element to the container
  messageContainer.appendChild(messageElement);

  // Clear the message after 3 seconds
  setTimeout(() => {
    messageElement.remove();
  }, 2000);

  // Scroll to the top of the page to make the message visible
  window.scrollTo(0, 0);
}

function fetchItemData(file) {
  return fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch item data');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching item data:', error);
    });
}


// Add event listener to the login form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLoginFormSubmission);

