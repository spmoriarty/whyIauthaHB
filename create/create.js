import { logout, checkAuth, redirectIfLoggedIn } from './fetch-utils.js';



checkAuth();

const logoutButton = document.getElementById('logout');


logoutButton.addEventListener('click', () => {
    logout();
});