
// LocalStorage’dan bitiruvchilarni olish
function getGraduates() {
    const graduates = JSON.parse(localStorage.getItem('graduates')) || [];
    return graduates;
}

// LocalStorage’ga bitiruvchi qo‘shish
function saveGraduate(graduate) {
    const graduates = getGraduates();
    graduates.push(graduate);
    localStorage.setItem('graduates', JSON.stringify(graduates));
}

// Bitiruvchilarni ro‘yxatga chiqarish
function renderGraduates() {
    const graduatesList = document.getElementById('graduatesList');
    const graduates = getGraduates();
    // graduatesList.innerHTML = '';

    graduates.forEach(graduate => {
        const li = document.createElement('li');
        li.textContent = `${graduate.name}, ${graduate.institution}, ${graduate.year} - ${graduate.employmentStatus}`;
        graduatesList.appendChild(li);
    });
}

// Admin bo‘limida bitiruvchi qo‘shish
document.getElementById('addGraduateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const employmentStatus = document.getElementById('employmentStatus').value;

    const newGraduate = {
        name,
        institution,
        year,
        employmentStatus
    };

    saveGraduate(newGraduate);

    this.reset();
    renderGraduates();
});

window.onload = function () {
    renderGraduates();
};

function tozalash() {
    localStorage.clear()    
}