function tambahTugas() {
    let input = document.getElementById("todo-input");
    let taskText = input.value;

    // Validasi agar tidak memasukkan tugas kosong
    if (taskText === "") {
        alert("Isi tugasnya dulu ya!");
        return;
    }

    let ul = document.getElementById("todo-list");
    
    // Membuat elemen list baru (li)
    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="hapusTugas(this)">Hapus</button>
    `;

    // Menambahkan li ke dalam ul
    ul.appendChild(li);

    // Mengosongkan kembali kotak input
    input.value = "";
}

function hapusTugas(btn) {
    // Menghapus elemen induk dari tombol (yaitu elemen li)
    let li = btn.parentElement;
    li.remove();
}
