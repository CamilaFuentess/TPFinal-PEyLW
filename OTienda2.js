
var carroVisible = false; 

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', listo)
}else{
    listo();
}

function listo (){
    //funcionalidad a los botones de eliminar del carrito 
    var botonEliminarItem = document.getElementsByClassName("eliminar");
    for (var i=0; i<botonEliminarItem.length; i++ ){                         /*cantidad de elementos que hay dentro de una clase*/
        var boton = botonEliminarItem[i];
        boton.addEventListener('click', eliminarItem);
    }
    //funcionalidad al boton de suma 
    var botonAgregarItem = document.getElementsByClassName("sumar");
    for (var i=0;i<botonAgregarItem.length;i++){
        var boton = botonAgregarItem[i];
        boton.addEventListener("click",sumarCantidad);
    }
    //funcionad al boton de restar cantidad 
    var botonRestarItem = document.getElementsByClassName("restar");
    for (var i=0;i<botonRestarItem.length;i++){
        var boton = botonRestarItem[i];
        boton.addEventListener('click', restarCantidad);
    }
    //funcionalidad al boton de AgregarAlCarrito 
    var botonAgregarAlCarrito = document.getElementsByClassName("agregarAlCarrito");
    for(var i=0; i<botonAgregarAlCarrito.length; i++){
        var boton = botonAgregarAlCarrito[i];
        boton.addEventListener('click',agregarAlCarro);
    }
    //funcionalidad de pagar 
    document.getElementsByClassName("pagar")[0].addEventListener('click',pagar)
}

//Elimina elementos del carrito 
function pagar (){
    alert("Gracias por su compra");
    var Rproductos = document.getElementsByClassName("Rproductos")[0];
    while (Rproductos.hasChildNodes()){
        Rproductos.removeChild(Rproductos.firstChild)
    }
    actualizarCarrito();
    ocultarCarrito();
}

function agregarAlCarro(event){
    var boton = event.target;
    var item = boton.parentElement;
    var titulo = item.getElementsByClassName('tituloItem')[0].innerText;
    var precio = item.getElementsByClassName('precioPorducto')[0].innerText;
    
    agregarITEM (titulo, precio)

    hacerCarroVisible();

}

//hace visible a los items dentro del carrito
function hacerCarroVisible(){
    carroVisible = true;
    var carta = document.getElementsByClassName("cartaProductos")[0];
    carta.style.marginRight= '0';
    carta.style.opacity = '1';

    var itemss = document.getElementsByClassName("contenedor-Items")[0];
    itemss.style.width = '60%';
}

//agregamos un item al carrito 

function agregarITEM(titulo, precio){ 
    var item = document.createElement('div');
    item.classList.add = ('item');
    var productosCarrito = document.getElementsByClassName("Rproductos")[0];
    
    var nombreItem = productosCarrito.getElementsByClassName("tituloProducto");
    for(var i=0; i< nombreItem.length; i++){
        if(nombreItem[i].innerText==titulo){
            alert ("Este producto ya se encuentra en el carrito. Revise bien");
            return
        }
    }
    var itemContenido = `
    <div class="cartaDeProductos">
         <div class="infoProductos"> 
            <span class="tituloProducto"> ${titulo}</span>
            <div class="Cantidad">
                <i class="restar"> - </i>
                <input type="text" value="1" class="cantidad-Item" disabled> 
                <i class="sumar"> + </i>
            </div>
            <span class="precioProducto"> ${precio}</span>
            <button class="eliminar"><i> </i>  </button>
    </div>
    `
    item.innerHTML = itemContenido;
    productosCarrito.append(item);

    //funcionalidad eliminar el nuevo item
    item.getElementsByClassName("eliminar")[0].addEventListener('click',eliminarItem);

    //funcionalidad de restar cantidad 
    var botonRestarItem = item.getElementsByClassName('restar')[0];
    botonRestarItem.addEventListener('click', restarCantidad);

    //sumamos cantidad 
    var botonAgregarItem = item.getElementsByClassName('sumar')[0];
    botonAgregarItem.addEventListener('click',sumarCantidad);

    actualizarCarrito();
}

//suma cant item 
function sumarCantidad(event){
    var botonClick = event.target;
    var selec = botonClick.parentElement;
    var actual = selec.getElementsByClassName("cantidad-Item")[0].value;
    actual++; 
    selec.getElementsByClassName('cantidad-Item')[0].value = actual;
    actualizarCarrito();
}

//resto cantudad 
function restarCantidad(event){
    var botonClickk = event.target;
    var select = botonClickk.parentElement; 
    var actual = select.getElementsByClassName("cantidad-Item")[0].value;
    actual--; 
    if(actual>=1 ){ 
    select.getElementsByClassName('cantidad-Item')[0].value = actual;
    actualizarCarrito();
    }
}

//elimina item del carrito
function eliminarItem(event) {
    var botton = event.target;
    botton.parentElement.parentElement.remove();
    actualizarCarrito();
    ocultarCarrito();
}

//Oculta el carro en caso de no haber items a comprar
function ocultarCarrito(){
    var itemsCarrito = document.getElementsByClassName('Rproductos')[0];  /*contenedor carrito*/
    if(itemsCarrito.childElementCount==0){
        var carro = document.getElementsByClassName('cartaProductos')[0];
        carro.style.margin = '-100%';
        carro.style.opacity = '0';
        carroVisible = false;

        var items = document.getElementsByClassName('contenedor-Items')[0];
        items.style.width = '100%';
    }
}

function actualizarCarrito(){
    var carritoContenedor = document.getElementsByClassName('cartaProductos')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('cartaDeProductos');
    var total = 0;
    //recorre elementos del carrito 
    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('precioProducto')[0];
        
        var precio = parseInt(precioElemento.innerText.replace('$',''));
        var cantidadItem = item.getElementsByClassName('cantidad-Item')[0];
        
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    document.getElementsByClassName('aPagar')[0].innerText = '$'+total+ ",00";
}


