'use strict';

{
  // NEWS
  const tabsButton = document.querySelectorAll('.news-tabs li button');
  const newsContents = document.querySelectorAll('.news-container .content')

  tabsButton.forEach(clickButton => {
    clickButton.addEventListener('click', (e) => {
      e.preventDefault();

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

  // mask共通
  const mask = document.querySelector('#mask');

  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    document.querySelectorAll('.gallery-modal').forEach(modal => {
      modal.classList.add('hidden');
    });
    contactModal.classList.add('hidden');
  });

  // Gallery Modal
  const galleryOpen = document.querySelectorAll('.gallery-open');
  const galleryClose = document.querySelectorAll('.gallery-close');

  galleryOpen.forEach(clickedItem => {
    clickedItem.addEventListener('click', () => {
      const modal = document.querySelector('#' + clickedItem.dataset.id);
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    });
  });
  galleryClose.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      closeButton.closest('.gallery-modal').classList.add('hidden');
      mask.classList.add('hidden');
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