import React from 'react'

function ProductDetails({ product, visible }) {

  console.log('---');
  console.log('current sideOpen status',visible);
  console.log('current selectedProduct status',product);

if (!product)console.log('!product');
// if (!product)product=null

  if (!visible) return null


  console.log('Before the "no product" condition');
  console.log('current selectedProduct status',product);

  if (!product) {
    console.log('Reached the "no product" condition');
    return (
    <div className="product-details">
      <p className="product-info">Our Products</p>
      <p>Welcome to our product catalog. Please enjoy exploring.</p>
      <p>Please select a product to view its details.</p>
    </div>
  )}


  console.log('After the "no product" condition');
  console.log('current selectedProduct status',product);

if(product.details){
  console.log('Reached the "product" condition');
  return (
    <div className="product-details">
      <p className="product-info">{product.name}</p>
      <p>{product.description}</p>
      <p className="product-price">{product.price}</p>
      <p>Details</p>
      <ul>
        {product.details.map((item, index) => <li className="product-details-list-item" key={index}>
          {item.label}<br />
          <span className="product-info">{item.value}</span>
        </li>)}
      </ul>
    </div>
  )
}
}

export default ProductDetails;
