const alteraEstiloBody = (classe) =>{
    const body = document.querySelector('body');
    body.className = '';
    body.classList.add(classe);
}

export default alteraEstiloBody;