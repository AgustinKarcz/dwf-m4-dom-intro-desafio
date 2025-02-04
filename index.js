const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const todoslosLi = document.querySelectorAll(".lista");
  todoslosLi.forEach((lista) => {
    const liEl = lista.querySelectorAll("li");
    liEl.forEach((li) => {
      li.remove();
    });
  });
  const lista = document.querySelectorAll(".lista");
  const terminal = document.createElement("li");
  terminal.textContent = "Terminal";
  const node = document.createElement("li");
  node.textContent = "Node";
  const oop = document.createElement("li");
  oop.textContent = "Oop";
  const typescript = document.createElement("li");
  typescript.textContent = "Typescript";
  const css = document.createElement("li");
  css.textContent = "Css";
  const dom = document.createElement("li");
  dom.textContent = "Dom";
  dom.classList.add("special");
  todoslosLi.forEach((lista) => {
    lista.appendChild(terminal);
    lista.appendChild(node);
    lista.appendChild(oop);
    lista.appendChild(typescript);
    lista.appendChild(css);
    lista.appendChild(dom);
  });
}

main();
