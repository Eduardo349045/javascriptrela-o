function showPopup(id) {
    document.getElementById(id).style.display = 'block';
}

function closePopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = 'none');
}

