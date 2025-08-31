// main.js
export async function loadUserData() {
  try {
    const module = await import('./data.js');
    const users = module.default;

    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = ''; // Clear previous rows
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

// Async function to search names containing the query string (case-insensitive)
export async function searchUsersByName(query) {
  const module = await import('./data.js');
  const users = module.default;

  // Simulate async processing with Promise.resolve
  const filteredUsers = await Promise.resolve(
    users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
  );

  return filteredUsers;
}

// Call loadUserData initially to show all data
loadUserData();
