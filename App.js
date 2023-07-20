

// <div id="parent">
//     <div id="child">
//         <h1></h1>
//     </div>
// </div>

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [
            React.createElement("h1", { id: "header", key: "1" }, "I am a Header"),
            React.createElement("h2", { id: "header", key: "2" }, "I am a Header 2")
        ]),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", { id: "header", key: "1" }, "I am a Header"),
            React.createElement("h2", { id: "header", key: "2" }, "I am a Header 2")
        ])]
);

//const heading = React.createElement("h1", { id: "header" }, "Hello World!");
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);