'use strict';
  
    const modalContent = document.querySelector('.modal-callback'),
       modalOverlay = document.querySelector('.modal-overlay');
   
     document.addEventListener('click', (event) => {
       let target = event.target;
       if (target.matches('#popupBtn')) {
         event.preventDefault();
         modalOverlay.style.display = 'block';
         modalContent.style.display = 'block';
       }
     
     });
 
     document.addEventListener('click', (event) => {
       let target = event.target;
       let formControls = document.querySelectorAll('.form-control');
       if (target.matches('.modal-close') ||
       target.closest('.modal-overlay')) {
         modalContent.style.display = 'none';
         modalOverlay.style.display = 'none';
       }  
     });
