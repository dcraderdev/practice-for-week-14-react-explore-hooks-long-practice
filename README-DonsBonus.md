# Remember Selected Product
This feature will allow the application to remember the selected product even if the user refreshes the page or closes and reopens the application. This is done by using the localStorage API to store the selected product.

## How it Works
When the user selects a product, the application stores the product in localStorage using localStorage.setItem(). This saves the product as a string.

When the application loads, it checks localStorage to see if there is a saved product. If there is, it retrieves the saved product using localStorage.getItem() and parses it back into an object.

Usage
To use this feature, you need to make sure that the selectedProduct state variable is being updated whenever the user selects a product. You can do this by passing a callback function to the useState hook:

javascript
```
const [selectedProduct, setSelectedProduct] = useState(() => {
  const item = localStorage.getItem('selectedProduct');
  return item ? JSON.parse(item) : null;
})
```
Note that we are using JSON.parse() to parse the saved product string back into an object.

To save the selected product, you need to call localStorage.setItem() whenever the user selects a product:

javascript
Copy code
setSelectedProduct(item)
localStorage.setItem('selectedProduct', JSON.stringify(item));
Finally, to display the product details, you can pass the selectedProduct state variable as a prop to the ProductDetails component:

javascript
```
<ProductDetails product={selectedProduct} />
```
## Troubleshooting
If you are getting an error like this:
ProductDetails(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
It's possible that the saved product is not being parsed correctly from the localStorage string. Make sure that you are using JSON.parse() to parse the saved product string back into an object:

javascript
```
const item = localStorage.getItem('selectedProduct');
return item ? JSON.parse(item) : null;
```
If you are still having trouble, try using console.log() to debug your code and make sure that the selectedProduct state variable is being updated correctly.