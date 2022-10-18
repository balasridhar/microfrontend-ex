import { mount as productsMount } from 'products/ProductsBS';
import { mount as cartMount } from 'cart/CartBS';

console.log('container');

productsMount(document.querySelector('#con-products'));
cartMount(document.querySelector('#con-cart'));
