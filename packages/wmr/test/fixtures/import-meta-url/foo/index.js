const img = document.createElement('img');
img.src = new URL('./my-image.svg', import.meta.url);
document.body.appendChild(img);
