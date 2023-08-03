const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
};
const portfolioItems = [
    // Add your portfolio items here with the following format:
    // { category: "pizza", image: "path/to/image.jpg" },
    // { category: "tajine", image: "path/to/image.jpg" },
    // ...
    
];
  
const itemsPerPage = 20;
let currentPage = 1;

const shuffleArray = (array) => {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
};

const generateGrid = (category = "all") => {
let filteredItems = category === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === category);

if (category === "all") {
    filteredItems = shuffleArray([...filteredItems]);
}

const start = (currentPage - 1) * itemsPerPage;
const end = start + itemsPerPage;

const gridContent = filteredItems.slice(start, end).map((item) => `
    <div class="portfolio-item" data-category="${item.category}">
    <img src="${item.image}" alt="Image of ${item.category}">
    </div>
`).join("");

document.querySelector(".portfolio-grid").innerHTML = gridContent;
generatePagination(filteredItems.length);
};

const generatePagination = (totalItems) => {
const pageCount = Math.ceil(totalItems / itemsPerPage);
const paginationContent = Array.from({ length: pageCount }, (_, i) => `
    <button class="pagination-btn${i + 1 === currentPage ? " active" : ""}" data-page="${i + 1}">${i + 1}</button>
`).join("");

document.querySelector(".pagination").innerHTML = paginationContent;
};

const setActiveCategory = (categoryBtn) => {
document.querySelectorAll(".category-btn").forEach((btn) => btn.classList.remove("active"));
categoryBtn.classList.add("active");
};

document.querySelectorAll(".category-btn").forEach((btn) => {
btn.addEventListener("click", () => {
    setActiveCategory(btn);
    currentPage = 1;
    generateGrid(btn.dataset.category);
});
});

document.querySelector(".pagination").addEventListener("click", (event) => {
if (event.target.matches(".pagination-btn")) {
    currentPage = parseInt(event.target.dataset.page, 10);
    generateGrid(document.querySelector(".category-btn.active").dataset.category);
    smoothScrollToTop();
}
});

generateGrid();
  