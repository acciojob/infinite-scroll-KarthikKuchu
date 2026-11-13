const infiList = document.getElementById('infi-list');
let itemCount = 0;

// Function to add items
function addItems(count) {
    for (let i = 0; i < count; i++) {
        itemCount++;
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${itemCount}`;
        infiList.appendChild(listItem);
    }
}

// 1. Add about 10 list items by default
addItems(10);

// 2. Add 2 more items when the user reaches the end of the list
infiList.addEventListener('scroll', function() {
    // Check if scrolled to the bottom (scrollTop + clientHeight >= scrollHeight - tolerance)
    if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight - 5) {
        addItems(2);
    }
});