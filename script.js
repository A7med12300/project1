"tues strict";
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});