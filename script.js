let usernameRegister = document.getElementById('usernameRegister');
let emailRegister = document.getElementById('emailRegister');
let passwordRegister = document.getElementById('passwordRegister');
let emailLogin = document.getElementById('emailLogin');
let passwordLogin = document.getElementById('passwordLogin');
let tombolPengarah = document.getElementById('tombolPengarah');

function register() {
    localStorage.setItem('username', usernameRegister.value);
    localStorage.setItem('email', emailRegister.value);
    localStorage.setItem('password', passwordRegister.value);

    alert('Pendaftaran Telah Berhasil\nSilahkan Login');
}


function login() {
    if(emailLogin.value == localStorage.getItem('email') && passwordLogin.value == localStorage.getItem('password')) {
        alert("Selama Datang " + localStorage.getItem('username') + " Di Trendingan");
        
        tombolPengarah.formAction = "indexRegister.html";

    }
}