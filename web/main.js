let panels = ["homeContainer", "tableContainer", "dishesContainer", "ordersContainer", "historyContainer", "tableCreateContainer"];

function show(container) {
    console.log(container);
    panels.forEach((panel) => {
        document.querySelector('#' + panel).style.display = "none";
    });
    document.querySelector("#" + container).style.display = "block";

    if (container == "tableContainer"){
        loadAllTables();
    }
}

