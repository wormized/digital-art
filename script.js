const completedPieces = [
  {
    file: "piece1.PNG"
  },

  {
    file: "piece2.png"
  },

  {
    file: "piece3.png"
  },

  {
    file: "piece4.PNG"
  },

  {
    file: "piece5.PNG"
  },

  {
    file: "piece6.PNG"
  },

  {
    file: "piece7.PNG"
  },

  {
    file: "piece8.PNG"
  },

  {
    file: "piece9.PNG"
  },

  {
    file: "piece10.PNG"
  },

  {
    file: "piece11.PNG"
  },

  {
    file: "piece12.PNG"
  },

  {
    file: "piece13.PNG"
  },

  {
    file: "piece14.PNG"
  },

  {
    file: "piece15.PNG"
  },

  {
    file: "piece16.PNG"
  },

  {
    file: "piece17.PNG"
  },

  {
    file: "piece18.PNG"
  },

  {
    file: "piece19.PNG"
  },

  {
    file: "piece20.PNG"
  },

  {
    file: "piece21.PNG"
  },

  {
    file: "piece22.PNG"
  },

  {
    file: "piece23.PNG"
  },

  {
    file: "piece24.PNG"
  },

  {
    file: "piece25.PNG"
  },

  {
    file: "piece26.PNG"
  },

  {
    file: "piece27.PNG"
  },

  {
    file: "piece28.PNG"
  },

  {
    file: "piece29.PNG"
  },

  {
    file: "piece30.PNG"
  },

  {
    file: "piece31.PNG"
  },

  {
    file: "piece32.PNG"
  },

  {
    file: "piece33.PNG"
  },

  {
    file: "piece34.PNG"
  },

  {
    file: "piece35.PNG"
  },

  {
    file: "piece36.PNG"
  },

  {
    file: "piece37.PNG"
  },

  {
    file: "piece38.PNG"
  },

  {
    file: "piece39.PNG"
  },

  {
    file: "piece40.PNG"
  },

  {
    file: "piece41.PNG"
  },

  {
    file: "piece42.PNG"
  },

  {
    file: "piece43.PNG"
  },

  {
    file: "piece44.PNG"
  },

  {
    file: "piece45.PNG"
  },

  {
    file: "piece46.PNG"
  },

  {
    file: "piece47.PNG"
  },
  
  {
    file: "piece48.PNG"
  },
];


const sketches = [
  {
    file: "sketch1.PNG"
  },

  {
    file: "sketch2.PNG"
  },

  {
    file: "sketch3.PNG"
  },

  {
    file: "sketch4.PNG"
  },

  {
    file: "sketch5.PNG"
  },

  {
    file: "sketch6.PNG"
  },

  {
    file: "sketch7.png"
  },

  {
    file: "sketch8.PNG"
  },

  {
    file: "sketch9.PNG"
  },

  {
    file: "sketch10.PNG"
  },

  {
    file: "sketch11.PNG"
  },

  {
    file: "sketch12.PNG"
  },

  {
    file: "sketch13.PNG"
  },

  {
    file: "sketch14.PNG"
  },

  {
    file: "sketch15.PNG"
  },

  {
    file: "sketch16.PNG"
  },

  {
    file: "sketch17.PNG"
  },

  {
    file: "sketch18.PNG"
  },

  {
    file: "sketch19.PNG"
  },

  {
    file: "sketch20.PNG"
  },

  {
    file: "sketch21.PNG"
  },

  {
    file: "sketch22.PNG"
  },

  {
    file: "sketch23.PNG"
  },

  {
    file: "sketch24.PNG"
  },

  {
    file: "sketch25.PNG"
  },

  {
    file: "sketch27.PNG"
  },

  {
    file: "sketch28.PNG"
  },

  {
    file: "sketch29.PNG"
  },

  {
    file: "sketch30.PNG"
  },

  {
    file: "sketch31.PNG"
  },

  {
    file: "sketch32.PNG"
  },

  {
    file: "sketch33.PNG"
  },

  {
    file: "sketch44.PNG"
  },

  {
    file: "sketch45.PNG"
  },

  {
    file: "sketch46.PNG"
  },

  {
    file: "sketch47.PNG"
  },

  {
    file: "sketch48.PNG"
  },

  {
    file: "sketch49.PNG"
  },

  {
    file: "sketch50.PNG"
  },

  {
    file: "sketch51.PNG"
  },

  {
    file: "sketch52.PNG"
  },

  {
    file: "sketch53.PNG"
  },

  {
    file: "sketch54.PNG"
  },

  {
    file: "sketch55.PNG"
  },

  {
    file: "sketch56.PNG"
  },

  {
    file: "sketch58.PNG"
  },

  {
    file: "sketch59.PNG"
  },

  {
    file: "sketch60.PNG"
  },

  {
    file: "sketch61.PNG"
  },

  {
    file: "sketch62.PNG"
  },

  {
    file: "sketch63.PNG"
  },

  {
    file: "sketch64.PNG"
  },

  {
    file: "sketch65.PNG"
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

  const activeGallery = document.getElementById(id);
  activeGallery.classList.add('active-gallery');

  if (id === 'completed') {
    document.querySelectorAll('.tab')[0].classList.add('active');
  } else {
    document.querySelectorAll('.tab')[1].classList.add('active');
  }

  activeGallery.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}