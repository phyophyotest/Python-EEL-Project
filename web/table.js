function createTable() {
    let name = document.querySelector("#create_table_name").value;
    eel.createTable(name)((data)=>{
        document.querySelector("#create_table_name").value = "";
        show("tableContainer");
    });

}
function loadAllTables() {
    eel.getAllTables()((datas) => {
        let str ="";
        datas.forEach((data)=>{
           str += `
            <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>
                        <button class="btn btn-success btn-sm">Free</button>
                        <button class="btn btn-secondary btn-sm">Engage</button>
                        <button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button>
                    </td>
                    <td>
                        <button class="btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
                        <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
           `;
        })
        document.querySelector("#table_rows").innerHTML = str;
    });
}