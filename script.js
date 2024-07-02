// Function to show the selected page and hide others
function showPage(pageId) {
    // Get all pages
    const pages = document.querySelectorAll('.page');

    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
}

// Initial page to show (Home page by default)
showPage('home');
