const completedPieces = [
  {
    file: "piece1.png"
  },

  {
    file: "piece2.png"
  },

  {
    file: "piece3.png"
  },

  {
    file: "piece4.png"
  },

  {
    file: "piece5.png"
  },

  {
    file: "piece6.png"
  },

  {
    file: "piece7.png"
  },

  {
    file: "piece8.png"
  },

  {
    file: "piece9.png"
  },

  {
    file: "piece10.png"
  },

  {
    file: "piece11.png"
  },

  {
    file: "piece12.png"
  },

  {
    file: "piece13.png"
  },

  {
    file: "piece14.png"
  },

  {
    file: "piece15.png"
  },

  {
    file: "piece16.png"
  },

  {
    file: "piece17.png"
  },

  {
    file: "piece18.png"
  },

  {
    file: "piece19.png"
  },

  {
    file: "piece20.png"
  },

  {
    file: "piece21.png"
  },

  {
    file: "piece22.png"
  },

  {
    file: "piece23.png"
  },

  {
    file: "piece24.png"
  },

  {
    file: "piece25.png"
  },

  {
    file: "piece26.png"
  },

  {
    file: "piece27.png"
  },

  {
    file: "piece28.png"
  },

  {
    file: "piece29.png"
  },

  {
    file: "piece30.png"
  },

  {
    file: "piece31.png"
  },

  {
    file: "piece32.png"
  },

  {
    file: "piece33.png"
  },

  {
    file: "piece34.png"
  },

  {
    file: "piece35.png"
  },

  {
    file: "piece36.png"
  },

  {
    file: "piece37.png"
  },

  {
    file: "piece38.png"
  },

  {
    file: "piece39.png"
  },

  {
    file: "piece40.png"
  },

  {
    file: "piece41.png"
  },

  {
    file: "piece42.png"
  },

  {
    file: "piece43.png"
  },

  {
    file: "piece44.png"
  },

  {
    file: "piece45.png"
  },

  {
    file: "piece46.png"
  },

  {
    file: "piece47.png"
  },
];


const sketches = [
  {
    file: "sketch1.png"
  },

  {
    file: "sketch2.png"
  },

  {
    file: "sketch3.png"
  },

  {
    file: "sketch4.png"
  },

  {
    file: "sketch5.png"
  },

  {
    file: "sketch6.png"
  },

  {
    file: "sketch7.png"
  },

  {
    file: "sketch8.png"
  },

  {
    file: "sketch9.png"
  },

  {
    file: "sketch10.png"
  },

  {
    file: "sketch11.png"
  },

  {
    file: "sketch12.png"
  },

  {
    file: "sketch13.png"
  },

  {
    file: "sketch14.png"
  },

  {
    file: "sketch15.png"
  },

  {
    file: "sketch16.png"
  },

  {
    file: "sketch17.png"
  },

  {
    file: "sketch18.png"
  },

  {
    file: "sketch19.png"
  },

  {
    file: "sketch20.png"
  },

  {
    file: "sketch21.png"
  },

  {
    file: "sketch22.png"
  },

  {
    file: "sketch23.png"
  },

  {
    file: "sketch24.png"
  },

  {
    file: "sketch25.png"
  },

  {
    file: "sketch27.png"
  },

  {
    file: "sketch28.png"
  },

  {
    file: "sketch29.png"
  },

  {
    file: "sketch30.png"
  },

  {
    file: "sketch31.png"
  },

  {
    file: "sketch32.png"
  },

  {
    file: "sketch33.png"
  },

  {
    file: "sketch45.png"
  },

  {
    file: "sketch46.png"
  },

  {
    file: "sketch47.png"
  },

  {
    file: "sketch48.png"
  },

  {
    file: "sketch49.png"
  },

  {
    file: "sketch50.png"
  },

  {
    file: "sketch51.png"
  },

  {
    file: "sketch52.png"
  },

  {
    file: "sketch53.png"
  },

  {
    file: "sketch54.png"
  },

  {
    file: "sketch55.png"
  },

  {
    file: "sketch56.png"
  },

  {
    file: "sketch57.png"
  },

  {
    file: "sketch58.png"
  },

  {
    file: "sketch59.png"
  },

  {
    file: "sketch60.png"
  },

  {
    file: "sketch61.png"
  },

  {
    file: "sketch62.png"
  },

  {
    file: "sketch63.png"
  },

  {
    file: "sketch64.png"
  },

  {
    file: "sketch65.png"
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