## Hi there 👋

This is the progress of stage clearance

# Image Gallery

A small static website that serves image files with live search. Pure HTML, CSS, and JavaScript — no build step.

## Structure

- `index.html` – page markup
- `style.css` – styling
- `app.js` – loads the image list and filters it as you type
- `images.json` – catalog of images (file name, display name, tags)
- `images/` – the image files

## Add your own images

1. Put the file in `images/`.
2. Add an entry to `images.json`:

```json
{
    "file": "my-photo.jpg",
    "name": "My Photo",
    "tags": ["vacation", "beach"]
}
```

## Notes

- GitHub Pages serves files case-sensitively — keep file names in `images.json` exactly matching the files on disk.
- `.svg`, `.png`, `.jpg`, `.gif`, `.webp`, and `.avif` all work as static files.



<!--
**ClashCritters/ClashCritters** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
