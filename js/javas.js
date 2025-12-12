const openBtn = document.getElementById("openFilterBtn");
const closeBtn = document.getElementById("closeFilterBtn");
const modal = document.getElementById("filterModal");

openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Tutup modal jika klik area luar
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});



// ARRAY UTAMA
let todo = [];

// SUBMIT FORM
function submitList(event) {
    event.preventDefault(); // mencegah reload halaman

    const title = document.getElementById("todo-title");
    const desc = document.getElementById("todo-desc");
    const date = document.getElementById("todo-date");

    // VALIDASI
    if (title.value === "" || desc.value === "" || date.value === "") {
        alert("Semua field harus diisi!");
        return;
    }

    // OBJEK TODO
    const todoObj = {
        title: title.value,
        desc: desc.value,
        date: date.value
    };

    // MASUKKAN KE ARRAY
    todo.push(todoObj);

    // RENDER ULANG
    renderTodos();

    // RESET FORM
    title.value = "";
    desc.value = "";
    date.value = "";
}



// RENDER TASK
function renderTodos(data = todo) {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    data.forEach((item) => {
        list.innerHTML += `
            <li class="p-4 bg-white border rounded-lg shadow">
                <h3 class="text-lg font-semibold">${item.title}</h3>
                <p class="text-gray-700">${item.desc}</p>
                <p class="text-sm text-gray-500 mt-1">📅 ${item.date}</p>
            </li>
        `;
    });
}


function resetList(){
    todo=[];
    renderTodos()
}

function filterByTitle() {
    const keyword = document.getElementById("filter-input").value.toLowerCase();

    const filtered = todo.filter(item =>
        item.title.toLowerCase().includes(keyword)
    );

    console.log('anjay lah')
    // Render hasil pencarian
    renderTodos(filtered);

    // Tutup modal
    const modal = document.getElementById("filterModal");
    modal.classList.add("hidden");

    // Hapus input filter (opsional)
    document.getElementById("filter-input").value = "";
}