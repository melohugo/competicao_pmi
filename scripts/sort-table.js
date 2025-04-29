document.addEventListener('DOMContentLoaded', () => {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const headers = table.querySelectorAll('th');
        headers.forEach((th, i) => {
            th.style.cursor = 'pointer';
            th.title = 'Clique para ordenar';
            th.addEventListener('click', () => {
                const rows = Array.from(table.querySelectorAll('tr:nth-child(n+2)'));
                const sorted = rows.sort((a, b) => {
                    const A = a.children[i].innerText;
                    const B = b.children[i].innerText;
                    return isNaN(A - B) ? A.localeCompare(B) : B - A;
                });
                sorted.forEach(row => table.appendChild(row));
            });
        });
    });
});

