const key = document.querySelector('#insert')
window.addEventListener('keydown', (e)=>{
    key.innerHTML = `
    <div class='color'>
    <table>
  <thead>
    <tr>
      <th>key</th>
      <th>keycode</th>
      <th>code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>${e.key}</th>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </div>
    `
})