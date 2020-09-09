var modalbtn=document.querySelector('.createtodo');

var modalBg=document.querySelector('.modal-bg');

var modelClose = document.querySelector('.modal-close');

//henter informasjonen som er skrevet inn



var createBtn= document.querySelector('.btnCreate');

var inpTitle=document.getElementById('inpTitle');

var inpDescription = document.getElementById('inpDescription');

var inpAuthor= document.getElementById('inpAuthor');

var output= document.getElementById("main");

var btnCreate = document.getElementById("btnCreate");


modalbtn.addEventListener('click', function(){
modalBg.classList.add('bg-active')    
});

modelClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active')});  

 var prop= document.getElementById("kkk");

        function template (data) {
        return `<article class="test">
        <h3>${data.inpTitle} </h3>
        <p class="todopara">${data.inpDescription}</p>
        <div class="buttonalign">

        <div class="buttondiv">

            <button class="complete"> Complete </button>

            <button class="delete"> Delete </button>


        </div>
    </div>
    </article>`
        }          
    

  
      

    function renderContent(formData){

    output.innerHTML += template(formData)

    }
    function handleformSubmit(e){
        e.preventDefault();
        const formData ={};
        Array.from(e.target.children).map(elm => {
            if(elm.nodeName === 'INPUT'){
                formData[elm.id] = elm.value
            }
        })
        renderContent(formData)

    }
    btnCreate.addEventListener("click", handleformSubmit)
    

