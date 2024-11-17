// pagination bar
let rowsPerPage = 5; // row's number per page
let currentPage = 1; // Current page (default)

// function to update the pages and change the page
function goToPage(page) {
  const totalRows = document.querySelectorAll(".table-row").length; 
  let totalPages = Math.ceil(totalRows / rowsPerPage); 

  if (page < 1 || page > totalPages) return; // Make sure the page is within the domain of the total pages.
  currentPage = page;

  // Update the active style in the pagination bar
  document.querySelectorAll(".page__numbers").forEach((num, index) => {
    num.classList.toggle("active", index + 1 === currentPage);
  });

  // Determine the rows to be displayed based on the current page
  const startRow = (currentPage - 1) * rowsPerPage; // First row in the current page
  const endRow = startRow + rowsPerPage; // Last row in the current page

  // Display table rows based on current page
  const rows = document.querySelectorAll(".table-row");
  rows.forEach((row, index) => {
    if (index >= startRow && index < endRow) {
      row.style.display = ""; 
    } else {
      row.style.display = "none"; 
    }
  });  
  // set total pages number on the pagination bar
  updatePagination(totalPages);
}

// function to update the pagination bar with the total pages dynamically
function updatePagination(totalPages) {
  const paginationContainer = document.querySelector(".page");
  paginationContainer.innerHTML = ""; 

  // Add the previous page button
  const prevButton = document.createElement("li");
  prevButton.classList.add("page__btn");
  prevButton.innerHTML = '<span class="material-icons">&#x2039;</span>';
  prevButton.addEventListener("click", () => goToPage(currentPage - 1));
  paginationContainer.appendChild(prevButton);

  // Add the page numbers based on the total pages
  for (let i = 1; i <= totalPages; i++) {
    // Display the numbers near the current page
    if (i === 1 || (i >= currentPage - 1 && i <= currentPage + 1)) {
      const pageNumber = document.createElement("li");
      pageNumber.classList.add("page__numbers");
      pageNumber.textContent = i;
      pageNumber.addEventListener("click", () => goToPage(i));

      if (i === currentPage) {
        pageNumber.classList.add("active"); 
      }

      paginationContainer.appendChild(pageNumber);
    }
  }

  // Add the next page button
  const nextButton = document.createElement("li");
  nextButton.classList.add("page__btn");
  nextButton.innerHTML = '<span class="material-icons">&#x203A;</span>';
  nextButton.addEventListener("click", () => goToPage(currentPage + 1));
  paginationContainer.appendChild(nextButton);
}

// Display the rows by default when the page is loaded for the first time(on mount)
document.addEventListener("DOMContentLoaded", function() {
  goToPage(1); 
});
