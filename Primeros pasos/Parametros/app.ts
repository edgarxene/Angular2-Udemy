function activar( quien:string,
                  objeto:string = "batiseñal",
                  momento?:string)
{

  let mensaje:string;
  if(momento){
    mensaje = `${quien} activó la ${objeto}, ${momento}`;
  }else{
    mensaje = `${quien} activó la ${objeto}`;
  }
  console.log(mensaje);
}

activar("Gordon");
