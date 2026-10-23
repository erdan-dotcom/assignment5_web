document.getElementById('task2-btn').addEventListener('click', function() {
    document.getElementById('task2-text').innerText = "The text has been successfully changed!";
});

document.getElementById('task3-color-btn').addEventListener('click', function() {
    document.getElementById('task3-box').style.backgroundColor = "#ff9999";
});

document.getElementById('task3-size-btn').addEventListener('click', function() {
    document.getElementById('task3-box').style.fontSize = "24px";
});

document.getElementById('task4-add-btn').addEventListener('click', function() {
    let ul = document.getElementById('task4-list');
    let li = document.createElement('li');
    li.innerText = "New Item";
    ul.appendChild(li);
});

document.getElementById('task4-remove-btn').addEventListener('click', function() {
    let ul = document.getElementById('task4-list');
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
});