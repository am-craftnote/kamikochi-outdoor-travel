'use strict';

{
  // Hamburger Menu
  const menuOpen = document.querySelector('#menu-open');
  const overlay = document.querySelector('.overlay');
  const menuClose = document.querySelector('#menu-close');
  const menuItem = document.querySelectorAll('.overlay ul li a');

  menuOpen.addEventListener('click', () => {
    overlay.classList.add('show');
    menuOpen.classList.add('hide');
  });

  menuClose.addEventListener('click', () => {
    overlay.classList.remove('show');
    menuOpen.classList.remove('hide');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      overlay.classList.remove('show');
      menuOpen.classList.remove('hide');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlay.classList.remove('show');
      menuOpen.classList.remove('hide');

      mask.classList.add('hidden');

      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
      });

      contactModal.classList.add('hidden');
    }
  });

  // mask共通
  const mask = document.querySelector('#mask');

  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    document.querySelectorAll('.modal').forEach(modal => {
      modal.classList.add('hidden');
    });
    contactModal.classList.add('hidden');
  });

  // Modal
  const modalOpen = document.querySelectorAll('.modal-open');
  const modalClose = document.querySelectorAll('.modal-close');

  modalOpen.forEach(clickedItem => {
    clickedItem.addEventListener('click', () => {
      const modal = document.querySelector('#' + clickedItem.dataset.id);
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    });
  });
  modalClose.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      closeButton.closest('.modal').classList.add('hidden');
      mask.classList.add('hidden');
    });
  });


  // NEWS
  const tabsButton = document.querySelectorAll('.news-tabs li button');
  const newsContents = document.querySelectorAll('.news-container .content');

  tabsButton.forEach(clickButton => {
    clickButton.addEventListener('click', () => {

      tabsButton.forEach(tabButton => {
        tabButton.classList.remove('active');
      });

      clickButton.classList.add('active');

      newsContents.forEach(content => {
        content.classList.remove('active');
      });

      document.querySelector('#' + clickButton.dataset.id).classList.add('active');
    });
  });

  // Contact Modal
  const contactOpen = document.querySelector('#contact-open');
  const contactClose = document.querySelector('#contact-close');
  const contactModal = document.querySelector('#contact-modal');

  contactOpen.addEventListener('click', () => {
    contactModal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  contactClose.addEventListener('click', () => {
    contactModal.classList.add('hidden');
    mask.classList.add('hidden');
  });
}