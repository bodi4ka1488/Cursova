const menuTable = document.getElementById("menu-table");
fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((joke) => {
      const row = menuTable.insertRow();
      row.innerHTML = `
        <td>${joke.setup}</td>
        <td>${joke.punchline}</td>
      `;
    });
  })
  .catch((error) => console.error("Помилка отримання даних:", error));
