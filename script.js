async function fetchCredentials() {
    const response = await fetch('credentials.json');
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Failed to load credentials');
    }
}

async function login() {
    try {
        const credentials = await fetchCredentials();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === credentials.username && password === credentials.password) {
            localStorage.setItem('loggedIn', 'true'); // Set login flag in localStorage
            showMainContent();
        } else {
            alert('WROOONNNGG!!! Try again.');
        }
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
}

function showMainContent() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.querySelector('.video-background').style.display = 'none';
    document.querySelector('.bottom-left-image').style.display = 'none';
    document.body.style.backgroundColor = '#FFF4DB'; // Change background color
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('loggedIn') === 'true') {
        showMainContent();
    }
});