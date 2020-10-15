const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create map
const map = L.map("mapid", options).setView([-23.6665478,-46.4610178], 15);

// Create and add titleLayer
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
).addTo(map);


// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});



// Create and add marker
L.marker([-23.6665478,-46.4610178], {icon}).addTo(map)

// Image gallery
function selectImage(event){
   const button = event.currentTarget;

   // Remover todas as classes active
    const buttons =  document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button){
        button.classList.remove("active");
    }
   // Selecionar a imagem clicada 
   const image = button.children[0];
   const imageContainer = document.querySelector(".orphanage-details > img");

   // Atualizar o container de imagem
   imageContainer.src = image.src;

   // Adicionar a classe active para este botão
   button.classList.add('active');
}
