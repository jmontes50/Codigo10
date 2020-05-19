window.onload=()=>{
    let traerCliente = ()=>{
        let ajax = new XMLHttpRequest();

        ajax.onreadystatechange = () => {
            if(ajax.readyState === 4){
                console.log("estado",ajax.status);
                let JSONrespuesta = JSON.parse(ajax.responseText);
                console.log(JSONrespuesta);                
                if(ajax.status === 200){
                    console.log('ok');
                }
            }
        }
        ajax.open("GET","http://127.0.0.1:5000/cliente");
        //mandamos
        ajax.send(null);
    }
    traerCliente();
}