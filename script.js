document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is already logged in (on Login Page)
    const username = localStorage.getItem('username');
    if (username && window.location.pathname === '/index.html') {
        // If logged in, redirect to home page
        window.location.href = 'home.html';
    }

    // Handle login form submission (dummy login)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get the username from the form and store it in localStorage
            const usernameInput = document.getElementById('username').value;
            if (usernameInput) {
                localStorage.setItem('username', usernameInput);
                window.location.href = 'home.html'; // Redirect to home page
            } else {
                alert('Please enter a username.');
            }
        });
    }

    // Home Page: Load health data from localStorage
    if (window.location.pathname === '/home.html') {
        const healthData = JSON.parse(localStorage.getItem('healthData'));
        if (healthData) {
            document.getElementById('steps').textContent = healthData.steps || '-';
            document.getElementById('heart-bpm').textContent = healthData.heartBPM || '-';
            document.getElementById('bmi').textContent = healthData.bmi || '-';
            document.getElementById('blood-pressure').textContent = healthData.bloodPressure || '-';
        } else {
            console.log('No health data found.');
        }
    }

    // Profile Page: Load profile data from localStorage
    if (window.location.pathname === '/profile.html') {
        const profile = JSON.parse(localStorage.getItem('userProfile'));
        if (profile) {
            document.getElementById('profile-name').textContent = profile.name || '-';
            document.getElementById('profile-username').textContent = profile.username || '-';
            document.getElementById('profile-age').textContent = profile.age || '-';
            document.getElementById('profile-weight').textContent = profile.weight || '-';
            document.getElementById('profile-height').textContent = profile.height || '-';
            document.getElementById('profile-goal').textContent = profile.goal || '-';
        } else {
            console.log('No profile data found.');
        }
    }

    // Health & Sleep Data Page: Load health and sleep data from localStorage
    if (window.location.pathname === '/hsdata.html') {
        const sleepData = JSON.parse(localStorage.getItem('sleepData'));
        if (sleepData) {
            document.getElementById('total-sleep').textContent = sleepData.totalSleep || '-';
            document.getElementById('deep-sleep').textContent = sleepData.deepSleep || '-';
            document.getElementById('light-sleep').textContent = sleepData.lightSleep || '-';
            document.getElementById('sleep-quality').textContent = sleepData.sleepQuality || '-';
        } else {
            console.log('No sleep data found.');
        }
    }

    // Logout functionality (from any page)
    const logoutButton = document.querySelector('.logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Clear the username from localStorage and redirect to login page
            localStorage.removeItem('username');
            window.location.href = 'index.html';
        });
    }
});
