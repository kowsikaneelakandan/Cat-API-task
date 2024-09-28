fetch("https://cat-fact.herokuapp.com/facts")
  .then((response) => response.json())
  .then((json) => {
    let Ui = `
    <tr>
    <th>ID</th>
    <th>User</th>
    <th>Text</th>
    <th>Type</th>
    <th>Deleted</th>
    <th>Used</th>
    </tr>`;
    json.forEach((user) => {
      Ui += `<tr>
        <td>${user._id}</td>
        <td>${user.user} </td>
        <td>${user.text}</td>
        <td>${user.type}</td>
        <td>${user.deleted}</td>
        <td>${user.used}</td>
      </tr>`;
    });
    const user=document.getElementById("user").innerHTML = Ui;
    });

