function seleccionar(link){
    opciones[0].className= "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click',function(){
    console.log('clik')
    document.getElementById("sidebar").classList.toggle('active');
    console.log(document.getElementById('sidebar'));
})


function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("js").classList.add("barra-progreso1");
         document.getElementById("html").classList.add("barra-progreso2");
          document.getElementById("css").classList.add("barra-progreso3");
         document.getElementById("java").classList.add("barra-progreso4");
    }
}