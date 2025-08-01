let child = document.getElementById('child');
let child2 = document.getElementById('child2');
let btnStop = document.getElementById('btnStop');
let items0 = document.getElementById('items0');
let btnHide = document.getElementById('btnHide');


btnStop.addEventListener('click', function () {
    if (child.classList.contains('loader')) {
        child.classList.remove('loader');
        child2.classList.remove('loader1');
        child.classList.add('loader2');
    } else {
        child.classList.add('loader');
        child2.classList.add('loader1');
    }

});

btnHide.addEventListener('click', function () {
    items0.classList.toggle('itemHide')
});


// function form
let formLatihan = document.getElementById('formLatihan');

formLatihan.addEventListener('submit', function (event) {
    event.preventDefault(); // cegah form langsung terkirim

    let nama = document.getElementById('nama').value.trim();
    let kelas = document.getElementById('kelas').value.trim();
    let btnFrom = document.getElementById('btnFrom');

    // rieset form error
    document.getElementById('namaError').textContent = 'Nama tidak boleh kosong';
    document.getElementById('kelasError').textContent = 'Kelas tidak boleh kosong';

    let valid = true;
    if (nama === '') {
        document.getElementById('namaError').textContent = 'Nama tidak boleh kosong';
        valid = false;
    };

    if (kelas === '') {
        document.getElementById('kelasError').textContent = 'Kelas tidak boleh kosong';
        valid = false;
    };

    if (valid) {
        alert('Form berhasil dikirim selamat data ' + nama + ' kelas ' + kelas)
        formLatihan.reset();
    };

});

