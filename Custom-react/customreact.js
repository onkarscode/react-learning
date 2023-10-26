function customRender(reactElement, container) {
        const domElemnet = document.createElement(reactElement.type);
        domElemnet.innerHTML = reactElement.children;
        for (const prop in reactElement.props) {
            if (prop === "children") continue;
            domElemnet.setAttribute(prop, reactElement.props[prop]);
            }
            container.appendChild(domElemnet);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
