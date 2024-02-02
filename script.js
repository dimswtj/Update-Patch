document.getElementById("maafButton").addEventListener("click", function() {
    document.body.style.background = "linear-gradient(to bottom left, #3498db, #2ecc71)";
});


// document.getElementById("maafButton").addEventListener("click", function() {
//     alert("Terima kasih atas kebaikanmu. Saya berjanji tidak akan mengulangi kesalahan ini 🥺❤️.");

// });
let buttonClicked = false;

function handleButtonClick() {
    if (!buttonClicked) {
        alert("Dengan di Updatenya Patch ini Aku Ndaa Bakaal Ulangin Kejadian Kaya gini Dan jadi Pribadi Yang Lebii Baik Kedepannya. Aku Sayaang Ayaang Banyaa Banyaa 🥺❤️");

        var maafButton = document.getElementById("maafButton");
        maafButton.innerHTML = "Maacii Banyaa Ayaang 🥺❤️";

        document.getElementById('mainContainer').style.display = 'none';
        // Tampilkan container baru dengan pesan khusus
        document.getElementById('pesanContainer').style.display = 'block';

        buttonClicked = true;
    } else {
        
        alert("Terima kasih Kembali Ayaangg 🥺❤️");
    }
    // Tampilkan alert
    

    // Ubah teks pada tombol

}


