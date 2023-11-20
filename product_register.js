function validateForm() {
    var form = document.getElementById('productForm');
    var errorPanel = document.getElementById('errorPanel'); // Assuming you have an error panel to display messages
    var isValid = true;
    var errorMessage = '';

    // Validation logic for Product ID: Digit only and 8 characters long
    var productId = form["productId"].value;
    if (productId.match(/^\d{8}$/)) {
        isValid = false;
        errorMessage += 'Product ID must be 8 digits long (e.g., 44455599).\n';
    }

    // Add more validation checks as required for other fields

    if (!isValid) {
        // Display error message
        errorPanel.textContent = errorMessage;
        errorPanel.style.display = 'block'; // Show error panel
    }

    return isValid;
}
