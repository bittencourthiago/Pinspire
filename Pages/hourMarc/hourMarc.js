function marcar() {

    let name = document.getElementById('name').value
    let id = document.getElementById('id').value
    let details = document.getElementById('details').value
    let date = document.getElementById('date').value
    let time = document.getElementById('time').value




    let report = {
        name,
        id,
        details,
        date,
        time
    }


    console.log(report)

}