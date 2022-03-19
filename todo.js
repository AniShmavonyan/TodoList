function onloadpage() {
    document.getElementById("btnAdd").addEventListener("click", function (ev) {
        let val = document.getElementsByName("todovalue")[0].value.trim();

        if (val === "") {
            return;
        }

        let examplenode = document.getElementsByClassName("hidden");
        let node = examplenode[0].cloneNode(true);

        node.getRootNode().className = "";
        node.getElementsByClassName("val")[0].innerText = val;
        document.getElementsByClassName("container")[0].appendChild(node);

        node.getElementsByClassName("delete")[0]
            .addEventListener("click", function (ev) {
                ev.target.parentElement.parentElement.remove();
            });

        document.getElementsByName("todovalue")[0].value = "";
    });
}