document.addEventListener('DOMContentLoaded', function() {
    const kprForm = document.getElementById('kprForm');
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', function() {
        const creditHistory = document.getElementById('creditHistory').value;
        const gender = document.getElementById('gender').value;
        const married = document.getElementById('married').value;

        // Di sini Anda dapat menambahkan logika perhitungan KPR berdasarkan input yang diberikan.
        // Contoh:
        const hasilPerhitungan = `Anda memasukkan Credit History: ${creditHistory}, Gender: ${gender}, Married: ${married}`;
        alert(hasilPerhitungan);
    });
});
