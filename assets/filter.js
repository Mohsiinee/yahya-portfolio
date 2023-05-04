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
    { category: "tajine", image: "https://img.cuisineaz.com/660x660/2017/01/04/i115189-tajine-de-viande-pommes-de-terre-carotte-et-epices.jpeg" },
    { category: "tajine", image: "https://www.cuisinonsencouleurs.fr/wp-content/uploads/2012/02/DSC_0196.jpg" },
    { category: "tajine", image: "https://i.ytimg.com/vi/qMDaZ4NOwI8/maxresdefault.jpg" },
    { category: "tajine", image: "https://img.passeportsante.net/1200x675/2022-09-29/shutterstock-576347542.webp" },
    { category: "tajine", image: "https://i.ytimg.com/vi/jVR04xNwJn0/maxresdefault.jpg" },
    { category: "tajine", image: "https://img.cuisineaz.com/660x660/2021/04/10/i168253-tajine-poulet-petits-pois.jpeg" },
    { category: "tajine", image: "https://img.over-blog-kiwi.com/0/55/79/92/20180209/ob_d3d905_img-6684.JPG" },
    { category: "tajine", image: "https://www.yumelise.fr/wp-content/uploads/2019/06/tajine-marocain.jpg" },
    { category: "tajine", image: "https://images.radio-canada.ca/v1/alimentation/recette/4x3/tajine-poulet-soulard.jpg" },
    { category: "tajine", image: "https://media.istockphoto.com/id/1143191816/fr/photo/tajine-de-poulet-marocain-traditionnel-avec-olives-et-citrons-sal%C3%A9s.jpg?s=612x612&w=0&k=20&c=jlFa0-6_WvCJ8wzk5l4NDXMBU1OLl1uzFIzkgBGxyZM=" },
    { category: "pizza", image: "https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg" },
    { category: "pizza", image: "https://dxm.dam.savencia.com/api/wedia/dam/transform/fix635d9eidk6rrwseqxx1hm4hxuee5jn54fmie/800?t=resize&width=800" },
    { category: "pizza", image: "https://assets.afcdn.com/recipe/20160519/15342_w1024h1024c1cx3504cy2338.webp" },
    { category: "pizza", image: "https://www.bettybossi.ch/rdbimg/bb_itku120801_0243a/bb_itku120801_0243a_r01_v004_x0020.jpg" },
    { category: "pizza", image: "https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg" },
    { category: "pizza", image: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1416867304309.jpeg" },
    { category: "pizza", image: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
    { category: "pizza", image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-07-Chicken-Alfredo-Pizza%2FChicken-Alfredo-Pizza-KitchnKitchn2970-1_01" },
    { category: "pizza", image: "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg" },
    { category: "pizza", image: "https://therecipecritic.com/wp-content/uploads/2019/05/besthomemadepizzahero.jpg" },
    { category: "pizza", image: "https://images.deliveryhero.io/image/fd-tr/LH/y036-hero.jpg" },
    { category: "pizza", image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/11/ev-yapimi-pizza-7-tarifi.jpg" },
    { category: "pizza", image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-03/Easiest-Pizza_22-2_11.jpg?itok=MD7gO9Kp" },
    { category: "pizza", image: "https://asset2.cxnmarksandspencer.com/is/image/mands/1049_18052022_SB-29260_610x438?wid=610" },
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
  