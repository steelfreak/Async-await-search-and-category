// main.js
export async function loadUserData() {
  try {
    const module = await import('./data.js');
    const users = module.default;

    const tbody = document.querySelector('#userTable tbody');
    users.forEach(user => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.sex}</td>
        <td>${user.dob}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error('Error loading user data:', error);
  }
}

// Call loadUserData immediately
loadUserData();
