document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let customer = document.getElementById('customer');
  let blockCustomer = document.getElementById('block-customer');
  let freelancer = document.getElementById('freelancer');
  let blockFreelancer = document.getElementById('block-freelancer');

  customer.addEventListener('click', () => {
    blockCustomer.style.display = 'block';
  });

  freelancer.addEventListener('click', () => {
    blockFreelancer.style.display = 'block';
  })
});