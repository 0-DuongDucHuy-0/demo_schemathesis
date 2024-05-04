// Get the search input and filter select elements
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const auctionsContainer = document.getElementById("auctions-container");

// Add event listeners for search and filter functionality
searchInput.addEventListener("input", handleSearch);
filterSelect.addEventListener("change", handleFilter);

// Function to handle search functionality
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const items = auctionsContainer.children;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemName = item.querySelector("h2").textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// Function to handle filter functionality
function handleFilter() {
  const filterValue = filterSelect.value;
  const items = auctionsContainer.children;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemCategory = item.dataset.category;
    if (filterValue === "all" || itemCategory === filterValue) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}
