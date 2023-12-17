function generateLink(title, source, type, extra) {
    if(extra != ""){
        return `https://freestream.us.to/play?s=${source}&t=${type}&n=${title}&extra=${extra}`;
    }else{
        return `https://freestream.us.to/play?s=${source}&t=${type}&n=${title}`;
    }
        
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
              let btnname = "Stream";
              let extra = "";
              if(e[3]){
                btnname = e[3];
              }
              if(e[4]){
                extra = e[4];
              }

              if (title && source && type) {
                  let link = generateLink(title, source, type, extra);
                  let tableRow = document.createElement("tr");
                  tableRow.innerHTML = `<td>${title}</td><td><button class="btn" onclick="window.open('${link}', '_self')">` + btnname + `</button></td>`;

                  document.getElementById("table").appendChild(tableRow);
              }
          });
      });
}

window.onload = fetchAndPopulateTable;
