const c = console.log

function getData(){
    const amount = document.getElementById('description')
    const date   = document.getElementById('date')
    const value  = document.getElementById('value')
    const data   = {
        amount: amount.value,
        date: date.value,
        value: value.value
    }

    amount.value = null;
    date.value = null;
    value.value = null

    return(data)
}
function addData(){
    const data = getData()
    const table = document.querySelector('.table')

    const tRow = document.createElement('tr')
    const tdAm = document.createElement('td')
    const tdVa = document.createElement('td')

    tdAm.innerHTML = data.amount
    tdVa.innerHTML = data.value

    tRow.appendChild(tdAm)
    tRow.appendChild(tdVa)
    table.appendChild(tRow)
}