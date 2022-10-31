
function init() {
    function processRows(json) {
        json.forEach((row) => {
    
            const tr = document.createElement('tr');
            const keys = Object.keys(row);
        
            keys.forEach((key) => {
                const td = document.createElement('td');
                td.textContent = row[key];
                tr.appendChild(td);
            })
            output.appendChild(tr);
        })
    }
    console.log("Right Hand Rule!")

    const sheetId = '1m7azxjBw7gxAm1IslglFinV12cKM9ZxaPsKGc-HWCZg';
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = 'user-data';
    const query = encodeURIComponent('Select *')
    const url = `${base}&sheet=${sheetName}&tq=${query}`

    const data = []

    const output = document.querySelector('.output')

    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

            const colz = [];
            const tr = document.createElement('tr');
            //Extract column labels
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                    // const th = document.createElement('th');
                    // th.innerText = column;
                    // tr.appendChild(th);
                }
            })
            output.appendChild(tr);

            //extract row data:
            jsonData.table.rows.forEach((rowData) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                data.push(row);
            })
            processRows(data);
        })
}

init()
// document.addEventListener('DOMContentLoaded', init)