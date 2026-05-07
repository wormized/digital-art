const completedPieces = [
  {
    file: "piece1.png"
  },

  {
    file: "piece2.png"
  },

];


const sketches = [
  {
    title: "Sketch 1",
    file: "sketch1.png"
  },

];


function populateGallery(id, data, folder) {

  const gallery = document.getElementById(id);

  data.forEach(piece => {

    const wrapper = document.createElement('div');
    wrapper.className = 'art-piece';

    wrapper.innerHTML = `
     <img src="images/${folder}/${piece.file}" alt="${piece.title || 'Artwork'}">

     ${piece.title ? `
       <div class="art-title">${piece.title}</div>
     ` : ''}
    `;

    gallery.appendChild(wrapper);
  });
}


populateGallery('completed', completedPieces, 'completed');
populateGallery('sketches', sketches, 'sketches');


function showGallery(id) {

  document.querySelectorAll('.gallery').forEach(gallery => {
    gallery.classList.remove('active-gallery');
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(id).classList.add('active-gallery');

  if (id === 'completed') {
    document.querySelectorAll('.tab')[0].classList.add('active');
  } else {
    document.querySelectorAll('.tab')[1].classList.add('active');
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}