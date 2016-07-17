(() =>
{
'use strict'
let store = document.querySelector('#store');
let products = document.querySelector('#products');
let menuStoreFirst = document.querySelector('.menuStoreFirst');
let menuSoftware = document.querySelector('.menuSoftware');
let wrapper = document.querySelector('#backWrapper');
let storeHome = document.querySelector('#storeHome');
let devices = document.querySelector('#devices');


function clicker (selector, callback)
{
	selector += "";
	document.querySelector(selector).addEventListener("click", callback);
}

menuStoreFirst.hidden = wrapper.hidden = menuSoftware.hidden = true;
clicker('#store', () => {
						menuStoreFirst.hidden = wrapper.hidden = false; 
						menuStoreFirst.style.left = store.getBoundingClientRect().left + "px";
						 })
clicker('#products', () => {
						menuStoreFirst.hidden = wrapper.hidden = false; 
						menuStoreFirst.style.left = products.getBoundingClientRect().left + "px";
						 })
clicker('#backWrapper', () => {menuStoreFirst.hidden = wrapper.hidden = menuSoftware.hidden = true})


storeHome.addEventListener("mouseover", () => {
												menuSoftware.hidden = false;
												let left = menuStoreFirst.getBoundingClientRect().left + 239;
												menuSoftware.style.left = left + "px";
											  });




})()