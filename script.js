    sumaContador = 0;
    finContador = 7;
    var time_in = setInterval(function(){
            sumaContador = sumaContador + 1;
            console.log(sumaContador)
            resultado.innerHTML = sumaContador;
        if(sumaContador == finContador){
            clearInterval(time_in)
        }
    }, 40);
    sumaContadordos = 0;
    finContadordos = 855;
    var time_indos = setInterval(function(){
        
            sumaContadordos = sumaContadordos + 5;
            console.log(sumaContadordos);
            resultadodos.innerHTML = sumaContadordos;
        
        if(sumaContadordos==finContadordos){
            clearInterval(time_indos)
        }
    }, 0.2);
    sumaContadortres = 0;
    finContadortres = 256;
    var time_intres = setInterval(function(){
            sumaContadortres = sumaContadortres + 1;
            console.log(sumaContadortres);
            resultadotres.innerHTML = sumaContadortres;
        if(sumaContadortres==finContadortres){
            clearInterval(time_intres)
        }
    }, 4);
    sumaContadorcuatro = 0;
    finContadorcuatro = 399;
    var time_incuatro = setInterval(function(){
            sumaContadorcuatro = sumaContadorcuatro + 1;
            console.log(sumaContadorcuatro);
            resultadocuatro.innerHTML = sumaContadorcuatro;
        if(sumaContadorcuatro==finContadorcuatro){
            clearInterval(time_incuatro)
        }
    }, 0.5);