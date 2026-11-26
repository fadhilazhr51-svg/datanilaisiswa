function simpanData() {
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let mapel = document.getElementById("mapel").value;
    let nilaiInput = document.getElementById("nilai").value;
    let nilai = Number(nilaiInput);

    if (nama === "" || kelas === "" || mapel === "" || nilaiInput === "") {
        alert("Semua data harus diisi!");
        return;
    }

    let predikat;

    if (nilai >= 90) {
        predikat = "A";
    } else if (nilai >= 80) {
        predikat = "B";
    } else if (nilai >= 70) {
        predikat = "C";
    } else {
        predikat = "D";
    }

    document.getElementById("hasil").innerHTML =
        "<li>Nama: " + nama + "</li>" +
        "<li>Kelas: " + kelas + "</li>" +
        "<li>Mata Pelajaran: " + mapel + "</li>" +
        "<li>Nilai: " + nilai + "</li>" +
        "<li>Predikat: " + predikat + "</li>";
}

document.getElementById("btnSimpan").addEventListener("click", simpanData);