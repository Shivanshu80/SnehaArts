const artworks = [
    {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        title: "Sunset Landscape",
        description: "A beautiful sunset over the hills."
    },
    {
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        title: "Forest Path",
        description: "A peaceful walk through the forest."
    },
    {
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        title: "Mountain View",
        description: "Majestic mountains under a clear sky."
    }
];

function displayArtworks() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    artworks.forEach(art => {
        const div = document.createElement('div');
        div.className = 'artwork';
        div.innerHTML = `
            <img src="${art.image}" alt="${art.title}">
            <h3>${art.title}</h3>
            <p>${art.description}</p>
        `;
        gallery.appendChild(div);
    });
}

window.onload = displayArtworks;