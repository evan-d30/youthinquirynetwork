function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.getElementById('primary-cta').addEventListener('click', function() {
  var currentPosition = window.scrollY;
  window.scrollBy({
    top: window.innerHeight * 2 - currentPosition,
    behavior: 'smooth'
  });
});
