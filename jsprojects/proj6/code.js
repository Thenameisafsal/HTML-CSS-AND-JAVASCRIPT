const ele = document.querySelector(".insert");
const key = window.addEventListener("keydown", function (e) {
  ele.innerHTML = `
  <table>
  <tr>
  <td>Key</td>
  <td>Value</td>
  <td>Code</td>
  </tr>
  <tr>
  <td>${e.key}</td>
  <td>${e.value}</td>
  <td>${e.code}</td>
  </tr>
  </table>
  `;
});
