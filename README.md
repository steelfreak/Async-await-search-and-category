# Async-await-search-and-category
using JavaScript async/await to search and make categories based on a local file running on a server


# Async User Data Search and Filter

A modular JavaScript project demonstrating asynchronous loading, searching, and filtering of user data with ES modules and async/await.

***

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Key Features](#key-features)  
3. [File Structure](#file-structure)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Technical Details](#technical-details)  
7. [Contributing](#contributing)  
8. [License](#license)  

***

## Project Overview

This project showcases how to use **JavaScript ES modules** and **async/await syntax** to asynchronously load user data from an external module, and implement dynamic search and category filtering functionalities on the client side. It supports:

- Asynchronous loading of external user data modules.
- Live search filtering by user name.
- Category filtering by user sex (gender).
- Combination of search and category filters.
- Dynamically updating the HTML table based on filters.

The code structure promotes modularity, maintainability, and smooth UI responsiveness by leveraging modern JavaScript features.

***

## Key Features

- User data stored externally in a JavaScript module (`data.js`).
- Main logic encapsulated in a separate module (`main.js`).
- Async loading and filtering of user data using `await import()` and `async` functions.
- Search users by name with case-insensitive filtering.
- Filter users by sex category (`Male`, `Female`, `All`).
- Real-time UI updates as inputs change.
- Easy extensibility for server-side integration or other filters.

***

## File Structure

```
/project-root
│
├── index.html         # Main HTML file with UI and module loader
├── data.js            # External JS module exporting user data array
└── main.js            # Main JS module with async data loading and filtering
```

***

## Getting Started

### Prerequisites

- Modern browser with ES module support.
- Local HTTP server to serve files (module imports do not work on file protocol).

### Running Locally

1. Clone or download the repository.
2. Open a terminal in the project folder.
3. Start a local HTTP server. For example, with Python 3:

   ```bash
   python -m http.server
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:8000/index.html
   ```

***

## Usage

- The page initially loads all users asynchronously from `data.js`.
- Use the **search input** to filter users by name.
- Use the **sex dropdown** to filter users by category.
- Both filters combine to narrow down results.
- The table updates live to reflect the filtered users.

***

## Technical Details

### Asynchronous Data Loading and Filtering

- `data.js` exports an array of user objects with properties: `name`, `sex`, and `dob`.
- `main.js` dynamically imports `data.js` asynchronously using:

  ```js
  const module = await import('./data.js');
  const users = module.default;
  ```

- Three main async functions:

  - `loadUserData()` — Loads all users and displays them.
  - `searchUsersByName(query)` — Filters users by case-insensitive name substring match asynchronously.
  - `filterUsersBySex(sexCategory)` — Filters users by sex category; returns all if "All" is selected.

- UI event handlers listen for input changes and invoke these functions to produce combined filtered results.

***

### How Search Works

- Triggered on each key input in the search box.
- Calls `searchUsersByName(query)` to asynchronously filter users with names including the query substring.
- Updates the displayed table with matching users.

***

### How Category Filter Works

- Triggered when the sex dropdown selection changes.
- Calls `filterUsersBySex(sexCategory)` to asynchronously filter users by sex.
- Combined with the current name search filter to refine results.
- "All" category shows all users.

***

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/steelfreak/Async-await-search-and-category/issues).

***

## License

Distributed under the MIT License. See `LICENSE` for more information.

***
