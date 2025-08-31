// main.js
export async function loadUserData() {
  try {
    const module = await import('./data.js');
    const users = module.default;

    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = ''; // Clear existing rows
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

// Async function to search users by name (case-insensitive)
export async function searchUsersByName(query) {
  const module = await import('./data.js');
  const users = module.default;

  const filteredUsers = await Promise.resolve(
    users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
  );

  return filteredUsers;
}

// Async function to filter users by sex category, e.g., 'Male', 'Female'
export async function filterUsersBySex(sexCategory) {
  const module = await import('./data.js');
  const users = module.default;

  // If sexCategory is empty or "All", return all users
  if (!sexCategory || sexCategory.toLowerCase() === 'all') {
    return users;
  }

  const filteredUsers = await Promise.resolve(
    users.filter(user => user.sex.toLowerCase() === sexCategory.toLowerCase())
  );

  return filteredUsers;
}

// Call to load initial user data
loadUserData();
