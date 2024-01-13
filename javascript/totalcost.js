let totalCost = 0;
const partlist = document.getElementById('partlist');
for(let i = 1; i < partlist.rows.length - 1; i++) {
    totalCost += parseFloat(partlist.rows[i].cells[1].textContent);
}
document.getElementById('totalcost').textContent = totalCost.toFixed(2);
