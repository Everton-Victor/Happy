// Create map
const map = L.map("mapid").setView([-23.6665478,-46.4610178], 15);

// Create and add titleLayer
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
).addTo(map);


// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remover icon 
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Add o campo de foto
function addPhotoField (){
    // Pegar o container de fotos #images

    const container = document.querySelector('#images');

    // Pegar o container pra duplicar .new-image
    const fieldsContainer =  document.querySelectorAll('.new-upload');

    // Realizar o clone da última imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // Verifica se está vazio. Se sim -> não add ao container de imagens
    const input = newFieldContainer.children[0];

    if(input.value == ""){
        return 
    }

    // Limpar o campo antes de add ao container de imagens
    input.value = "";

    // Add o clone ao container de #images
    container.appendChild(newFieldContainer);

}

// Apagar o campo de fotos
function deletePhotoField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1){
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

// Troca do button Sim e Não
function toggleSelect(event){
    // Retirar a class .active (dos buttons)
    document.querySelectorAll('.button-select button').forEach( function(button) { 
        button.classList.remove('active');
    });

    // Colocar a class .active no button clicado
    const button = event.currentTarget
    button.classList.add('active');

    // Atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name = "open_on_weekends"]');
    
    // verificar se é Sim ou Não
    input.value = button.dataset.value;



}
