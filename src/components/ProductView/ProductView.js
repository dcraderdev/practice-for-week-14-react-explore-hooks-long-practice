import {React, useState, useEffect} from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  // TODO: Replace with state variable
  // const sideOpen = true;
  // const [sideOpen, setSideOpen] = useState(true);
  // const [selectedProduct, setSelectedProduct] = useState()
  // // const [selectedProduct, setSelectedProduct] = useState(()=>{
  // //   if(localStorage.getItem('selectedProduct')) {
  // //     return localStorage.getItem('selectedProduct')
  // //   } else{
  // //     null
  // //   }
  // // });

  // setSelectedProduct(localStorage.getItem('selectedProduct') || null;)
  // setSelectedProduct(selectedProduct);

  // useEffect(()=>{
  //   console.log(`selectedProduct CHANGED TO`, selectedProduct);
  //   if(selectedProduct){
  //     setSideOpen(true)
  //   } 
  // },[selectedProduct])


  // useEffect(()=>{
  //   console.log('sideOpen',sideOpen);
  //   if(!sideOpen)setSelectedProduct(null)
  // },[sideOpen])



const [sideOpen, setSideOpen] = useState(true);
const [selectedProduct, setSelectedProduct] = useState(() => {
  const item = localStorage.getItem('selectedProduct');
  return item ? JSON.parse(item) : null;
})

// const [sideOpen, setSideOpen] = useState(true);
// const [selectedProduct, setSelectedProduct] = useState(
//   localStorage.getItem('selectedProduct') || null
// );


// const [sideOpen, setSideOpen] = useState(true);
// const [selectedProduct, setSelectedProduct] = useState();






useEffect(() => {
  if(selectedProduct)localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
  localStorage.setItem('sideOpen', sideOpen);
}, [selectedProduct, sideOpen]);



  useEffect(()=>{
    console.log(`selectedProduct CHANGED TO`, selectedProduct);
    if(selectedProduct){
      setSideOpen(true)
    } 
  },[selectedProduct])


  useEffect(()=>{
    console.log('sideOpen',sideOpen);
    if(!sideOpen)setSelectedProduct(undefined)
  },[sideOpen])




  console.log('current sideOpen status',sideOpen);
  console.log('current selectedProduct status',selectedProduct);


  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => {
                setSelectedProduct(item)
                console.log('SELECT PRODUCT', item)
            }}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => {
                setSideOpen(!sideOpen)
                console.log('TOGGLE SIDE PANEL')
              }}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails 
        visible={sideOpen}
        product={selectedProduct}
        
        />
      </div>
    </div>
  );
}

export default ProductView;