let range = document.getElementById("range");
let check = document.getElementById("check");
let pageview = document.getElementById("pageview");
let price = document.getElementById("price");

function cuerpo(){
    range.addEventListener("mousemove", function(){
        const x = range.value;
        let color = "linear-gradient(90deg, var(--slider_backgroud)" + x + "%,var(--empty_slider_bar)" + x + "%)";
        range.style.background = color;
    })
    function variable(x){
        range.addEventListener("change", ()=>{
            if(range.value==0){
                pageview.textContent = '0';
                price.textContent = '$0.00';
            }else if(range.value==20){
                pageview.textContent = '10K';
                price.textContent = x[0];
            }else if(range.value==40){
                pageview.textContent = '50K';
                price.textContent = x[1];
            }else if(range.value==60){
                pageview.textContent = '100K';
                price.textContent = x[2];
            }else if(range.value==80){
                pageview.textContent = '500K';
                price.textContent = x[3];
            }else if(range.value==100){
                pageview.textContent = '1M';
                price.textContent = x[4];
            }
        })
    }
    let precios = ['$8.00', '$12.00', '$16.00', '$24.00', '$36.00'];
    let preciosDes = ['$6.00', '$9.00', '$12.00', '$18.00', '$27.00'];
    let x=0;
    variable(precios);
    check.addEventListener('change', ()=>{
        if (x==0) {
            x=1;
            if(range.value==20){
                pageview.textContent = '10K';
                price.textContent = preciosDes[0];
            }else if(range.value==40){
                pageview.textContent = '50K';
                price.textContent = preciosDes[1];
            }else if(range.value==60){
                pageview.textContent = '100K';
                price.textContent = preciosDes[2];
            }else if(range.value==80){
                pageview.textContent = '500K';
                price.textContent = preciosDes[3];
            }else if(range.value==100){
                pageview.textContent = '1M';
                price.textContent = preciosDes[4];
            }
            variable(preciosDes);
        }else{
            x=0;
            if(range.value==20){
                pageview.textContent = '10K';
                price.textContent = precios[0];
            }else if(range.value==40){
                pageview.textContent = '50K';
                price.textContent = precios[1];
            }else if(range.value==60){
                pageview.textContent = '100K';
                price.textContent = precios[2];
            }else if(range.value==80){
                pageview.textContent = '500K';
                price.textContent = precios[3];
            }else if(range.value==100){
                pageview.textContent = '1M';
                price.textContent = precios[4];
            }
            variable(precios);
        }
    })
    
}
cuerpo();