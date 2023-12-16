function generateLink(title, source, type) {
  return `https://freestream.us.to/play?s=${source}&t=${type}&name=${title}`;
}

function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}

function fetchAndPopulateTable() {
  fetch("data.csv")
      .then(res => res.text())
      .then(data => {
          let result = data.split(/\r?\n|\r/).map(e => e.split(","));
          result.forEach(e => {
              let title = e[0];
              let source = e[1];
              let type = e[2];

              if (title && source && type) {
                  let link = generateLink(title, source, type);
                  let tableRow = document.createElement("tr");
                  tableRow.innerHTML = `<td>${title}</td><td><button class="btn" onclick="window.open(${link}, '_blank')">Stream</button></td>`;

                  document.getElementById("myTable").appendChild(tableRow);
              }
          });
      });
}

window.onload = fetchAndPopulateTable;
