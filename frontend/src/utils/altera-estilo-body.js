const alteraEstiloBody = (classe,classe2) =>{
    const body = document.querySelector('body');
    body.className = '';
    body.classList.add(classe);
    body.classList.add(classe2);
}

export default alteraEstiloBody;