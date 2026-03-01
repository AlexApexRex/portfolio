/* Sample artwork data — replace these entries later with your own files/URLs */
const artworks = [
  {
    title: "Quiet Orbit",
    category: "paper",
    medium: "Watercolor on paper",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Steel Dawn",
    category: "digital",
    medium: "Digital painting",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Between Signals",
    category: "paper",
    medium: "Gouache on paper",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Neon Memory",
    category: "digital",
    medium: "Digital concept study",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

const grid = document.querySelector("#art-grid");
const template = document.querySelector("#art-card-template");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderGallery(filter) {
  const shownWorks =
    filter === "all" ? artworks : artworks.filter((w) => w.category === filter);

  grid.innerHTML = "";

  shownWorks.forEach((work) => {
    const card = template.content.cloneNode(true);
    const image = card.querySelector("img");
    const title = card.querySelector("h3");
    const subtitle = card.querySelector(".subtitle");

    image.src = work.image;
    image.alt = `${work.title}, ${work.medium}, ${work.year}`;
    title.textContent = work.title;
    subtitle.textContent = `${work.medium} • ${work.year}`;

    grid.append(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
});

renderGallery("all");