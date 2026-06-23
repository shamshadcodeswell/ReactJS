/*
<div id = "parent">
<div id = "child">
<h1 class = "heading1">
<h2 class = "heading2">
</div>
</div>
*/

const element = React.createElement(
  "div",
  { id: "parent" },
  //   React.createElement("div", { id: "child" }, [
  //     React.createElement("h1", { id: "heading1" }, "heading1"),
  //     React.createElement("h2", { id: "heading2" }, "heading2"),
  //   ]),
  "helloWorld",
);
console.log(element);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
