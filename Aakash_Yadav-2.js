// Create the footer element
const footer = document.createElement("footer");
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.left = "0";
footer.style.width = "100%";
footer.style.backgroundColor = "white";
footer.style.height = "10vh";
footer.style.padding = "20px";
footer.style.textAlign = "center";
footer.style.zIndex = "99";
footer.style.display = "flex";
footer.style.justifyContent = "space-around";

// Create the items in the footer
const homeLink = document.createElement("a");
homeLink.href = "#";
homeLink.textContent = "Home";
footer.appendChild(homeLink);

const categoryLink = document.createElement("a");
categoryLink.href = "#";
categoryLink.textContent = "Category";
footer.appendChild(categoryLink);

const exploreLink = document.createElement("a");
exploreLink.href = "#";
exploreLink.textContent = "Explore";
footer.appendChild(exploreLink);

const profileLink = document.createElement("a");
profileLink.href = "#";
profileLink.textContent = "Profile";
footer.appendChild(profileLink);

// Creating Navbar
const navigationBar = document.createElement("div");
navigationBar.style.position = "fixed";
navigationBar.style.left = "0";
navigationBar.style.top = "0";
navigationBar.style.width = "25vw";
navigationBar.style.height = "90vh";
navigationBar.style.backgroundColor = "grey";
navigationBar.style.textAlign = "center";
navigationBar.style.display = "none";

// Helper function to add navbar buttons
function createCategoryButton(idName, textContent, backgroundColor) {
  const categoryButton = document.createElement("a");
  categoryButton.className = "category-button";
  categoryButton.id = idName;
  categoryButton.href = "#";
  categoryButton.textContent = textContent;
  categoryButton.style.display = "block";
  categoryButton.style.marginBottom = "10px";
  categoryButton.style.padding = "5px";
  categoryButton.style.backgroundColor = backgroundColor;
  categoryButton.style.color = "black";
  navigationBar.appendChild(categoryButton);
}

createCategoryButton("phone-btn", "Phone Accessories", "white");
createCategoryButton("apparel-btn", "Apparels", "");
createCategoryButton("mugs-btn", "Mugs & Sippers", "");
createCategoryButton("kitchen-btn", "Home & Kitchen", "");
createCategoryButton("stationery-btn", "Stationery", "");
createCategoryButton("office-btn", "Office Supplies", "");
createCategoryButton("gift-btn", "Gift & Accessories", "");

footer.appendChild(navigationBar);

const secondNavigationBar = document.createElement("div");
secondNavigationBar.style.position = "fixed";
secondNavigationBar.style.display = "none";
secondNavigationBar.style.right = "0";
secondNavigationBar.style.top = "0";
secondNavigationBar.style.width = "75vw";
secondNavigationBar.style.height = "90vh";
secondNavigationBar.style.backgroundColor = "white";
secondNavigationBar.style.padding = "10px";
secondNavigationBar.style.textAlign = "center";
secondNavigationBar.style.overflow = "auto";

categoryLink.addEventListener("click", function () {
  if (navigationBar.style.display === "none") {
    navigationBar.style.display = "block";
    secondNavigationBar.style.display = "block";
  } else {
    navigationBar.style.display = "none";
    secondNavigationBar.style.display = "none";
  }
});
document.body.appendChild(footer);

// Condition based list items display
const categoryButtons = document.querySelectorAll(".category-button");
categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    categoryButtons.forEach(function (btn) {
      btn.style.backgroundColor = "";
      btn.style.color = "";
      stationeryContent.style.display = "none";
      clothContent.style.display = "none";
      phoneContent.style.display = "none";
      giftContent.style.display = "none";
      kitchenContent.style.display = "none";
      officeContent.style.display = "none";
      mugContent.style.display = "none";
    });
    switch (button.id) {
      case "phone-btn":
        phoneContent.style.display = "block";
        break;
      case "apparel-btn":
        clothContent.style.display = "block";
        break;
      case "stationery-btn":
        stationeryContent.style.display = "block";
        break;
      case "mugs-btn":
        mugContent.style.display = "block";
        break;
      case "gift-btn":
        giftContent.style.display = "block";
        break;
      case "kitchen-btn":
        kitchenContent.style.display = "block";
        break;
      case "office-btn":
        officeContent.style.display = "block";
        break;
    }
    button.style.backgroundColor = "white";
  });
});

const phoneContent = document.createElement("div");
secondNavigationBar.appendChild(phoneContent);

const clothContent = document.createElement("div");
clothContent.style.display = "none";
secondNavigationBar.appendChild(clothContent);

const mugContent = document.createElement("div");
mugContent.style.display = "none";
secondNavigationBar.appendChild(mugContent);

const stationeryContent = document.createElement("div");
stationeryContent.style.display = "none";
secondNavigationBar.appendChild(stationeryContent);

const kitchenContent = document.createElement("div");
kitchenContent.style.display = "none";
secondNavigationBar.appendChild(kitchenContent);

const officeContent = document.createElement("div");
officeContent.style.display = "none";
secondNavigationBar.appendChild(officeContent);

const giftContent = document.createElement("div");
giftContent.style.display = "none";
secondNavigationBar.appendChild(giftContent);

footer.appendChild(secondNavigationBar);

function createListItem(href, src, text) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  const image = document.createElement("img");
  anchor.style.height = "200px";
  anchor.href = href;
  image.loading = "lazy";
  image.height = "160px";
  image.src = src;
  anchor.classList.add("anchortag");
  anchor.appendChild(image);
  anchor.appendChild(document.createTextNode(text));
  listItem.appendChild(anchor);
  return listItem;
}
function createList(container) {
  const ulist = document.createElement("ul");
  ulist.style.display = "flex";
  ulist.style.flexWrap = "wrap";
  ulist.style.listStyle = "none";
  container.appendChild(ulist);
  return ulist;
}
const ul = createList(phoneContent);
const clothList = createList(clothContent);
const mugList = createList(mugContent);
const kitchenList = createList(kitchenContent);
const stationeryList = createList(stationeryContent);
const giftList = createList(giftContent);
const officeList = createList(officeContent);

const phoneGrips = createListItem(
  "https://www.yourprint.in/product-category/customized-socket-grip-phone-holders",
  "https://www.yourprint.in/wp-content/uploads/2022/02/pop-socket.jpg",
  "Phone Grips"
);
ul.appendChild(phoneGrips);
const airPodCases = createListItem(
  "https://www.yourprint.in/product-category/customized-air-pod-cases",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Airpod1_cat.jpg",
  "Air Pod Cases"
);
ul.appendChild(airPodCases);
const watchBands = createListItem(
  "https://www.yourprint.in/product-category/customized-watch-bands",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Watch-Strap-Category-revised-1.jpg",
  "Watch Bands"
);
ul.appendChild(watchBands);
const phoneStandHolder = createListItem(
  "https://www.yourprint.in/product-category/customized-mobile-phone-stand",
  "https://www.yourprint.in/wp-content/uploads/2022/04/Phone-Stand-1.jpg",
  "Phone Stand Holder"
);
ul.appendChild(phoneStandHolder);
const mensClothing = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/custom-mens-clothing",
  "https://www.yourprint.in/wp-content/uploads/2023/02/Men-T-shirts.jpg",
  "Men's Clothing"
);
clothList.appendChild(mensClothing);
const womensClothing = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/custom-womens-clothing",
  "https://www.yourprint.in/wp-content/uploads/2019/10/WomenT-shirt.jpg",
  "Women's Clothing"
);
clothList.appendChild(womensClothing);
const kidsClothing = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/custom-kids-clothing",
  "https://www.yourprint.in/wp-content/uploads/2022/04/Kid-T-Shirts-1.jpg",
  "Kid's Clothing"
);
clothList.appendChild(kidsClothing);
const tShirts = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/customized-t-shirts",
  "https://www.yourprint.in/wp-content/uploads/2022/02/t-shirt-1.jpg",
  "T-Shirts"
);
clothList.appendChild(tShirts);
const hoodies = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/custom-hoodies",
  "https://www.yourprint.in/wp-content/uploads/2022/02/category-hoodie-copy.jpg",
  "Hoodies"
);
clothList.appendChild(hoodies);
const sweatshirts = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/custom-sweatshirts",
  "https://www.yourprint.in/wp-content/uploads/2022/02/category-sweatshirt2.jpg",
  "Sweat Shirts"
);
clothList.appendChild(sweatshirts);
const jackets = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/customized-jackets",
  "https://www.yourprint.in/wp-content/uploads/2022/02/zipper_hoodie_cat.jpg",
  "Jackets"
);
clothList.appendChild(jackets);
const socks = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/customized-socks",
  "https://www.yourprint.in/wp-content/uploads/2022/02/category_socks_new.jpg",
  "Socks"
);
clothList.appendChild(socks);
const caps = createListItem(
  "https://www.yourprint.in/product-category/customized-caps",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Cat_cat11.jpg",
  "Caps"
);
clothList.appendChild(caps);
const bags = createListItem(
  "",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Bag-2.jpg",
  "Bags"
);
clothList.appendChild(bags);
const aprons = createListItem(
  "https://www.yourprint.in/product-category/customized-aprons",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Apron.jpg",
  "Aprons"
);
clothList.appendChild(aprons);
const faceMasks1 = createListItem(
  "https://www.yourprint.in/product-category/customized-face-masks",
  "https://www.yourprint.in/wp-content/uploads/2022/02/fmask1.jpg",
  "Face Masks"
);
clothList.appendChild(faceMasks1);
const mufflers = createListItem(
  "https://www.yourprint.in/product-category/customized-mufflers",
  "https://www.yourprint.in/wp-content/uploads/2022/02/cat_muffler-1639155471388.jpg",
  "Mufflers"
);
clothList.appendChild(mufflers);
const faceMasks2 = createListItem(
  "https://www.yourprint.in/product-category/customized-face-masks",
  "https://www.yourprint.in/wp-content/uploads/2022/02/fmask1.jpg",
  "Face Masks"
);
clothList.appendChild(faceMasks2);
const trackPants = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/custom-mens-clothing/customized-track-pants",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Track_Pant_Cat1.jpg",
  "Track Pants"
);
clothList.appendChild(trackPants);
const headBands = createListItem(
  "https://www.yourprint.in/product-category/custom-clothing/customized-head-bands",
  "https://www.yourprint.in/wp-content/uploads/2022/02/head_bands_cat_1.jpg",
  "Head Bands"
);
clothList.appendChild(headBands);
const wallets = createListItem(
  "https://www.yourprint.in/product-category/customized-wallets",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Wallet.jpg",
  "Wallets"
);
clothList.appendChild(wallets);
const belts = createListItem(
  "https://www.yourprint.in/product-category/customized-belts",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Cat_belt2_2.jpg",
  "Belts"
);
clothList.appendChild(belts);
const sleepingMasks = createListItem(
  "https://www.yourprint.in/product-category/customized-sleeping-masks",
  "https://www.yourprint.in/wp-content/uploads/2022/02/sleeping_mask_cat.jpg",
  "Sleeping Masks"
);
clothList.appendChild(sleepingMasks);
const wristBands = createListItem(
  "https://www.yourprint.in/product-category/customized-wrist-bands",
  "https://www.yourprint.in/wp-content/uploads/2022/02/wbcat.jpg",
  "Wrist Bands"
);
clothList.appendChild(wristBands);
const travelKits = createListItem(
  "https://www.yourprint.in/product-category/customized-travel-kits",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Shaving_Pouches.jpg",
  "Travel Kits"
);
clothList.appendChild(travelKits);
const shoes = createListItem(
  "https://www.yourprint.in/product-category/customized-shoes",
  "https://www.yourprint.in/wp-content/uploads/2022/03/Shoes.jpg",
  "Shoes"
);
clothList.appendChild(shoes);
const mugs = createListItem(
  "https://www.yourprint.in/product-category/print-mugs",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Mug-2-1.jpg",
  "Mugs"
);
mugList.appendChild(mugs);
const sippers = createListItem(
  "https://www.yourprint.in/product-category/customized-sipper-bottles",
  "https://www.yourprint.in/wp-content/uploads/2022/02/sipper1.jpg",
  "Sippers"
);
mugList.appendChild(sippers);
const tumblers = createListItem(
  "https://www.yourprint.in/product-category/customized-tumblers",
  "https://www.yourprint.in/wp-content/uploads/2022/11/Tumbler.jpg",
  "Tumblers"
);
mugList.appendChild(tumblers);
const shotGlass = createListItem(
  "https://www.yourprint.in/product-category/customized-shot-glasses",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Shot-glass.jpg",
  "Shot Glass"
);
mugList.appendChild(shotGlass);
const beerMugs = createListItem(
  "https://www.yourprint.in/product-category/customized-beer-mugs",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Beer-mug.jpg",
  "Beer Mugs"
);
mugList.appendChild(beerMugs);
const cushions = createListItem(
  "https://www.yourprint.in/product-category/customized-cushions",
  "https://www.yourprint.in/wp-content/uploads/2022/02/cushion_Cat4-2.jpg",
  "Cushions"
);
kitchenList.appendChild(cushions);
const bedSheets = createListItem(
  "https://www.yourprint.in/product-category/customized-cushions",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Bed-Sheet3.jpg",
  "Bed Sheets"
);
kitchenList.appendChild(bedSheets);
const arprons = createListItem(
  "https://www.yourprint.in/product-category/customized-aprons",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Apron.jpg",
  "Aprons"
);
kitchenList.appendChild(arprons);
const tiffins = createListItem(
  "https://www.yourprint.in/product-category/customized-tiffins",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Tiffin_Cat_1-1.jpg",
  "Tiffins & Lunch Boxes"
);
kitchenList.appendChild(tiffins);
const curtains = createListItem(
  "https://www.yourprint.in/product-category/customized-curtains",
  "https://www.yourprint.in/wp-content/uploads/2022/02/curtain_cat.jpg",
  "Curtains"
);
kitchenList.appendChild(curtains);
const neonSigns = createListItem(
  "https://www.yourprint.in/product-category/customized-neon-signs",
  "https://www.yourprint.in/wp-content/uploads/2023/01/Neon.jpg",
  "Neon Signs"
);
kitchenList.appendChild(neonSigns);
const keyHangers = createListItem(
  "https://www.yourprint.in/product-category/customized-key-hangers",
  "https://www.yourprint.in/wp-content/uploads/2022/02/cat-01.jpg",
  "Key Hangers"
);
kitchenList.appendChild(keyHangers);
const doorHangers = createListItem(
  "https://www.yourprint.in/product-category/customized-door-hangers",
  "https://www.yourprint.in/wp-content/uploads/2022/02/door_hanger_cat_3.jpg",
  "Door Hangers"
);
kitchenList.appendChild(doorHangers);
const toys = createListItem(
  "https://www.yourprint.in/product-category/customized-toys",
  "https://www.yourprint.in/wp-content/uploads/2022/05/toys_cat.jpg",
  "Toys"
);
kitchenList.appendChild(toys);
const namePlates = createListItem(
  "https://www.yourprint.in/product-category/customized-name-plates",
  "https://www.yourprint.in/wp-content/uploads/2019/08/nplate.jpg",
  "Name Plates"
);
kitchenList.appendChild(namePlates);
const canvasFrames = createListItem(
  "https://www.yourprint.in/product-category/customized-plates",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Canvas.jpg",
  "Photo Canvas Frames"
);
kitchenList.appendChild(canvasFrames);
const posters = createListItem(
  "https://www.yourprint.in/product-category/customized-plates",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Poster.jpg",
  "Posters"
);
kitchenList.appendChild(posters);
const dinnerPlates = createListItem(
  "https://www.yourprint.in/product-category/customized-plates",
  "https://www.yourprint.in/wp-content/uploads/2022/02/plate.jpg",
  "Dinner Plates"
);
kitchenList.appendChild(dinnerPlates);
const fridgeMagnets = createListItem(
  "https://www.yourprint.in/product-category/customized-photo-fridge-magnets",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Fridge_Magnet.jpg",
  "Fridge Magnets"
);
kitchenList.appendChild(fridgeMagnets);
const coasters = createListItem(
  "https://www.yourprint.in/product-category/customized-led-frames",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Costers.jpg",
  "Coasters"
);
kitchenList.appendChild(coasters);
const photoFrames = createListItem(
  "https://www.yourprint.in/product-category/customized-led-frames",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Frame.jpg",
  "Photo Frames"
);
kitchenList.appendChild(photoFrames);
const ledFrames = createListItem(
  "https://www.yourprint.in/product-category/customized-led-frames",
  "https://www.yourprint.in/wp-content/uploads/2022/02/LED-GIF_revised.gif",
  "LED Frames"
);
kitchenList.appendChild(ledFrames);
const clocks = createListItem(
  "https://www.yourprint.in/product-category/customized-clocks",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Clock.jpg",
  "Clocks"
);
kitchenList.appendChild(clocks);
const mousePads = createListItem(
  "https://www.yourprint.in/product-category/customized-clocks",
  "https://www.yourprint.in/wp-content/uploads/2022/02/mpad-1.jpg",
  "Mouse Pads"
);
kitchenList.appendChild(mousePads);
const jigsawPuzzles = createListItem(
  "https://www.yourprint.in/product-category/customized-jigsaw-puzzles",
  "https://www.yourprint.in/wp-content/uploads/2022/02/puzzle-1.jpg",
  "Jigsaw Puzzles"
);
kitchenList.appendChild(jigsawPuzzles);
const engravedFrames = createListItem(
  "https://www.yourprint.in/product-category/customized-engraved-frames",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Wood-Frame.jpg",
  "Engraved Frames"
);
kitchenList.appendChild(engravedFrames);
const keychains = createListItem(
  "https://www.yourprint.in/product-category/fabrics",
  "https://www.yourprint.in/wp-content/uploads/2022/02/keychain-1.jpg",
  "Keychains"
);
kitchenList.appendChild(keychains);
const upholsteryFabric = createListItem(
  "https://www.yourprint.in/product-category/fabrics",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Cat_Fabrics1.jpg",
  "Upholstry Fabric"
);
kitchenList.appendChild(upholsteryFabric);
const visitingCards = createListItem(
  "https://www.yourprint.in/product-category/customized-pens",
  "https://www.yourprint.in/wp-content/uploads/2022/02/vc_cat.jpg",
  "Visiting Cards"
);
stationeryList.appendChild(visitingCards);
const calendars = createListItem(
  "https://www.yourprint.in/product-category/customized-pens",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Calendar-1-1.jpg",
  "Calendars 2022"
);
stationeryList.appendChild(calendars);
const pens = createListItem(
  "https://www.yourprint.in/product-category/customized-pens",
  "https://www.yourprint.in/wp-content/uploads/2022/02/pen_cat.jpg",
  "Pens"
);
stationeryList.appendChild(pens);
const playingCards = createListItem(
  "https://www.yourprint.in/product-category/customized-playing-cards",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Playing-Card-1.jpg",
  "Playing Cards"
);
stationeryList.appendChild(playingCards);
const notebooks = createListItem(
  "https://www.yourprint.in/product-category/customized-notebooks",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Notebook-1.jpg",
  "Notebooks"
);
stationeryList.appendChild(notebooks);
const notepads = createListItem(
  "https://www.yourprint.in/product-category/customized-notepads",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Notebook-2-1.jpg",
  "Notepads"
);
stationeryList.appendChild(notepads);
const letterheads = createListItem(
  "https://www.yourprint.in/product-category/letterheads",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Cat_letterhead.jpg",
  "Letterheads"
);
stationeryList.appendChild(letterheads);
const cranvasFrames = createListItem(
  "https://www.yourprint.in/product-category/customized-pens",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Canvas.jpg",
  "Canvas Frames"
);
stationeryList.appendChild(cranvasFrames);
const prosters = createListItem(
  "https://www.yourprint.in/product-category/customized-pens",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Poster.jpg",
  "Posters"
);
stationeryList.appendChild(prosters);
const buttonBadges = createListItem(
  "https://www.yourprint.in/product-category/customized-button-badges",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Badges-1-1.jpg",
  "Button Badges"
);
stationeryList.appendChild(buttonBadges);
const diaries = createListItem(
  "https://www.yourprint.in/product-category/customized-diaries",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Diary-1-1.jpg",
  "Diaries 2022"
);
stationeryList.appendChild(diaries);
const stickers = createListItem(
  "https://www.yourprint.in/product-category/customized-stamps",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Sticker.jpg",
  "Stickers"
);
stationeryList.appendChild(stickers);
const stamps = createListItem(
  "https://www.yourprint.in/product-category/customized-stamps",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Stamp.jpg",
  "Stamps"
);
stationeryList.appendChild(stamps);
const folders = createListItem(
  "https://www.yourprint.in/product-category/customized-folders",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Presentation-Folder-280x280-1.jpg",
  "Folders"
);
stationeryList.appendChild(folders);
const bannerStandee = createListItem(
  "https://www.yourprint.in/product-category/customized-banner-standees",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Standee.jpg",
  "Banner Standee"
);
stationeryList.appendChild(bannerStandee);
const penStands = createListItem(
  "https://www.yourprint.in/product-category/customized-pen-stands",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Penstand-2_cat.jpg",
  "Pen Stands"
);
stationeryList.appendChild(penStands);
const visitingCardHolders = createListItem(
  "https://www.yourprint.in/product-category/visiting-card-holders",
  "https://www.yourprint.in/wp-content/uploads/2022/02/vcard_holder.jpg",
  "Visiting Card Holders"
);
stationeryList.appendChild(visitingCardHolders);
const examBoards = createListItem(
  "https://www.yourprint.in/product-category/customized-exam-boards",
  "https://www.yourprint.in/wp-content/uploads/2022/02/ebcat3.jpg",
  "Exam Boards"
);
stationeryList.appendChild(examBoards);
const greetingCards = createListItem(
  "https://www.yourprint.in/product-category/customized-greeting-cards",
  "https://www.yourprint.in/wp-content/uploads/2022/02/gc_cat.jpg",
  "Greeting Cards"
);
stationeryList.appendChild(greetingCards);
const paperWeights = createListItem(
  "https://www.yourprint.in/product-category/customized-paper-weights",
  "https://www.yourprint.in/wp-content/uploads/2022/02/pwcat.jpg",
  "Paper Weights"
);
stationeryList.appendChild(paperWeights);
const geometryBox = createListItem(
  "https://www.yourprint.in/product-category/customized-geometry-box",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Gb_cat.jpg",
  "Geometry Box"
);
stationeryList.appendChild(geometryBox);
const penDrives = createListItem(
  "https://www.yourprint.in/product-category/customized-pen-drive",
  "https://www.yourprint.in/wp-content/uploads/2022/02/card-pendrive.jpg",
  "Pen Drives"
);
officeList.appendChild(penDrives);
const mouserPads = createListItem(
  "https://www.yourprint.in/product-category/customized-pen-drive",
  "https://www.yourprint.in/wp-content/uploads/2022/02/mpad-1.jpg",
  "Mouse Pads"
);
officeList.appendChild(mouserPads);
const diariesOffice = createListItem(
  "https://www.yourprint.in/product-category/customized-diaries",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Diary-1-1.jpg",
  "Diaries"
);
officeList.appendChild(diariesOffice);
const clorcks = createListItem(
  "https://www.yourprint.in/product-category/customized-clocks",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Clock.jpg",
  "Clocks"
);
officeList.appendChild(clorcks);
const stampsOffice = createListItem(
  "https://www.yourprint.in/product-category/customized-stamps",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Stamp.jpg",
  "Stamps"
);
officeList.appendChild(stampsOffice);
const pensOffice = createListItem(
  "https://www.yourprint.in/product-category/customized-pens",
  "https://www.yourprint.in/wp-content/uploads/2022/02/pen_cat.jpg",
  "Pens"
);
officeList.appendChild(pensOffice);
const penBox = createListItem(
  "https://www.yourprint.in/product-category/customized-pen-box",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Pen-Box-2.jpg",
  "Pen Box"
);
officeList.appendChild(penBox);
const penStandsOffice = createListItem(
  "https://www.yourprint.in/product-category/customized-pen-stands",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Penstand-2_cat.jpg",
  "Pen Stands"
);
officeList.appendChild(penStandsOffice);
const buttonBadgesOffice = createListItem(
  "https://www.yourprint.in/product-category/customized-button-badges",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Badges-1-1.jpg",
  "Button Badges"
);
officeList.appendChild(buttonBadgesOffice);
const geometryBoxOffice = createListItem(
  "https://www.yourprint.in/product-category/customized-geometry-box",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Gb_cat.jpg",
  "Geometry Box"
);
officeList.appendChild(geometryBoxOffice);
const bannerStandeeOffice = createListItem(
  "https://www.yourprint.in/product-category/customized-banner-standees",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Standee.jpg",
  "Banner Standee"
);
officeList.appendChild(bannerStandeeOffice);
const paperWeightsOffice = createListItem(
  "https://www.yourprint.in/product-category/customized-paper-weights",
  "https://www.yourprint.in/wp-content/uploads/2022/02/pwcat.jpg",
  "Paper Weights"
);
officeList.appendChild(paperWeightsOffice);
const droorHangers = createListItem(
  "https://www.yourprint.in/product-category/customized-door-hangers",
  "https://www.yourprint.in/wp-content/uploads/2022/02/door_hanger_cat_3.jpg",
  "Door Hangers"
);
officeList.appendChild(droorHangers);
const caricatures = createListItem(
  "https://www.yourprint.in/product-category/customized-caricatures",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Category-image-revised.jpg",
  "Caricatures"
);
giftList.appendChild(caricatures);
const kreychains = createListItem(
  "https://www.yourprint.in/product-category/customized-pen-box",
  "https://www.yourprint.in/wp-content/uploads/2022/02/keychain-1.jpg",
  "Keychains"
);
giftList.appendChild(kreychains);
const greetringCards = createListItem(
  "https://www.yourprint.in/product-category/customized-greeting-cards",
  "https://www.yourprint.in/wp-content/uploads/2022/02/gc_cat.jpg",
  "Greeting Cards"
);
giftList.appendChild(greetringCards);
const magicMirror = createListItem(
  "https://www.yourprint.in/product-category/customized-magic-mirrors",
  "https://www.yourprint.in/wp-content/uploads/2022/02/Category-magic-mirror1.jpg",
  "Magic Mirror"
);
giftList.appendChild(magicMirror);
const jigsrawPuzzles = createListItem(
  "https://www.yourprint.in/product-category/customized-jigsaw-puzzles",
  "https://www.yourprint.in/wp-content/uploads/2022/02/puzzle-1.jpg",
  "Jigsaw Puzzles"
);
giftList.appendChild(jigsrawPuzzles);

let anchorTags = document.getElementsByClassName("anchortag");
for (let i = 0; i < anchorTags.length; i++) {
  anchorTags[i].style.display = "flex";
  anchorTags[i].style.flexDirection = "column";
  anchorTags[i].style.height = "200px";
  let image = anchorTags[i].getElementsByTagName("img")[0];
  image.style.height = "160px";
}
