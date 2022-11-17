// const root = document.getElementById("root");

// const element = document.createElement('h1');
// element.textContent = "Hello World! From Js";
// element.className = "heading-1";
// root.appendChild(element);
const root = document.getElementById("root");

function detik() {
  console.log("Hello");
  const element = (
    <div>
      <h1>Jam Sekarang</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, root);
  // const element = `
  // <div>
  //   <h1>Jam Sekarang</h1>
  //   ${new Date().toLocaleString()}
  // </div>
  //   `;
  // root.innerHTML = element;
}
detik();
setInterval(function () {
  detik();
}, 1000);
