// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const buttons = document.querySelectorAll(".product button");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const productElement = button.parentElement;
            const productName = productElement.querySelector("h3").innerText;
            const productPrice = productElement.querySelector("p").innerText;

            const product = {
                name: productName,
                price: productPrice
            };

            cart.push(product);
            alert(`${product.name} added to cart!`);
            console.log("Current Cart:", cart);
        });
    });
});
