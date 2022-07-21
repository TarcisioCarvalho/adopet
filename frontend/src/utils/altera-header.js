



const alteraHeader = (adicionaIcone) =>{
    const iconeUsuario = document.querySelector('[data-usuario]');
    if(adicionaIcone && iconeUsuario){
        iconeUsuario.classList.remove('none');
        iconeUsuario.classList.add('icone-header-usuario');
        const header = document.querySelector('[data-header]');
        header.classList.add('header');
        return
     }
     if(iconeUsuario){
        iconeUsuario.classList.add('none');
        iconeUsuario.classList.remove('icone-header-usuario');
        const header = document.querySelector('[data-header]');
        header.classList.remove('header');
        return
     }
    }
   
    
       


   export default alteraHeader;