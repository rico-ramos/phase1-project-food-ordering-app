
function toggleProfilePanel() {
  const panel = document.getElementById('profilePanel');
  const overlay = document.getElementById('profileOverlay');

  if (panel.classList.contains('translate-x-full')) {
    panel.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    panel.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  }
}

function closeProfilePanel() {
  document.getElementById('profilePanel').classList.add('translate-x-full');
  document.getElementById('profileOverlay').classList.add('hidden');
}

function logoutUser() {
  localStorage.removeItem('role');
  localStorage.removeItem('email');


  closeProfilePanel();
  
  window.location.href = 'login.html';
}

function openPreferences() {
  alert("Preferences feature coming soon!");
}
