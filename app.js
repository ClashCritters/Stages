const gallery = document.getElementById('gallery');
const statusEl = document.getElementById('status');
const searchEl = document.getElementById('search');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

const MAX_THUMBNAILS = 10;

let images = [];

function render(items) {
    gallery.innerHTML = '';
    if (items.length === 0) {
        statusEl.textContent = 'No images found.';
        return;
    }
    statusEl.textContent = '';
    for (const img of items.slice(0, MAX_THUMBNAILS)) {
        const card = document.createElement('figure');
        card.className = 'card';

        const picture = document.createElement('img');
        picture.src = `images/${img.file}`;
        picture.alt = img.name;
        picture.loading = 'lazy';

        const caption = document.createElement('figcaption');
        caption.textContent = img.name;

        const tags = document.createElement('div');
        tags.className = 'tags';
        tags.textContent = (img.tags || []).join(' · ');

        card.append(picture, caption, tags);
        card.addEventListener('click', () => openLightbox(img));
        gallery.appendChild(card);
    }
}

function openLightbox(img) {
    lightboxImg.src = `images/${img.file}`;
    lightboxImg.alt = img.name;
    lightbox.hidden = false;
}

function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
}

lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

function applyFilter(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
        render(images);
        return;
    }
    render(images.filter(img =>
        img.name.toLowerCase().includes(q) ||
        (img.tags || []).some(tag => tag.toLowerCase().includes(q))
    ));
}

searchEl.addEventListener('input', e => applyFilter(e.target.value));

fetch('images.json')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    })
    .then(data => {
        images = data;
        render(images);
    })
    .catch(err => {
        statusEl.textContent = `Failed to load images: ${err.message}`;
    });
