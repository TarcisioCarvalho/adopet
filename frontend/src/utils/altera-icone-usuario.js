const alteraIconeUsuario = (colocaFoto) =>{

        const iconeUsuario =  document.querySelector('[data-usuario-icone]');
        const fotoUsuario = document.querySelector('[data-usuario-foto]');

    if(iconeUsuario && colocaFoto && fotoUsuario){
        iconeUsuario.classList.add('none');
        fotoUsuario.classList.remove('none');
        return;
    }
    if(iconeUsuario && fotoUsuario){
            iconeUsuario.classList.remove('none');
            fotoUsuario.classList.add('none');
            return;
    }
        
    
}

export default alteraIconeUsuario;