
let newMain = document.createElement("main");
//lager en ny 
newMain.setAttribute("id", "diven");
document.body.appendChild(newMain);

var cuisines = ["text0","text1","AaaaaaaaaaabbbbbbbB","3txet",];     

var sel = document.getElementById("CuisineList");
//denne for løkka er kopiert, men jeg la till nederste setning for å 
//kunne legge til ID på hvert element
for(var i = 0; i < cuisines.length; i++) {

    var opt = document.createElement('option');  

    opt.innerHTML = cuisines[i];

    opt.value = cuisines[i];

    sel.appendChild(opt);

    opt.setAttribute("id",i);

}
//setter width til å være 500px
document.getElementById("CuisineList").style.width="500px"
//lager test knappen
let testButton= document.createElement("button");
var testButtonText= document.createTextNode("Test");

testButton.appendChild(testButtonText);
newMain.appendChild(testButton);


testButton.setAttribute("id","btnTest");
var testbtn= document.getElementById("btnTest");
//reset knappen
let resetButton= document.createElement("button");
var resetButtonText= document.createTextNode("Reset");
resetButton.setAttribute("id", "resetKnapp")

resetButton.appendChild(resetButtonText);

newMain.appendChild(resetButton);
//random css for å sentrere objektene
document.body.style.textAlign="center";
document.body.style.marginTop="15%";


//paragrafen jeg skal endre kode på via knappen 
let newPara= document.createElement("p");
var paraText= document.createTextNode("click on a options to get its value");
newPara.setAttribute("id","textPara");
newPara.appendChild(paraText);
//legger til paragrafen i main elementet mitt

newMain.appendChild(newPara);


function ReverseString(str) { 
    return str.split('').reverse().join('') 
 } 

//legger til onclick function for test knappen for å endre html taggen 
testbtn.addEventListener("click", function(){
    var x = document.getElementById("CuisineList");
    var txt = " ";
    
    for (var i = 0; i < x.length; i++) {
        var txt = x.options[x.selectedIndex].value;
    }
    var reverseResultat = ReverseString(txt);
    reverseResultat = reverseResultat.substring(1);

    document.getElementById("textPara").innerHTML= reverseResultat;
  
});
//lager ul med 5 elementer
var ul=document.createElement('ul');
ul.setAttribute("id", "ulListe")
for(i=1;i<5;i++)
{
    var li=document.createElement('li');
    li.setAttribute("id","lista"+i)
    li.innerHTML=i;   
    //lager knapper for hver Li
    let deleteBtn= document.createElement("button");
    var dlttext= document.createTextNode("Delete");
   //id for hver knapp slik at jeg kan slette elemente senere
    deleteBtn.setAttribute("id", "slett"+i);
    
    deleteBtn.appendChild(dlttext);
  
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  
 
}
//legger til Ul i mainen slik at den vises
newMain.appendChild(ul);


//kopierte koden tidliger for å lage prikk lik ul liste, 
 var rstKnapp= document.getElementById("resetKnapp");
 rstKnapp.addEventListener("click",function(){
    var ul=document.createElement('ul');
    ul.setAttribute("id", "ulListe")
    for(i=1;i<5;i++)
    {
        var li=document.createElement('li');
        li.setAttribute("id","lista"+i)
        li.innerHTML=i;   
        let deleteBtn= document.createElement("button");
        var dlttext= document.createTextNode("Delete");
       
        deleteBtn.setAttribute("id", "slett"+i);
        
      
        deleteBtn.appendChild(dlttext);
      
    
        li.appendChild(deleteBtn);   
        ul.appendChild(li); 
    }  
    newMain.appendChild(ul);
 });
 
 //tungvindte måten å gjøre dette på men hver knapp nå slette elementet ved siden av seg 
 var knapp1= document.getElementById("slett1");
var knapp2= document.getElementById("slett2");
var knapp3= document.getElementById("slett3");
var knapp4= document.getElementById("slett4");

knapp1.addEventListener("click", function(){
   document.getElementById("lista1").innerHTML=null;
    
});
knapp2.addEventListener("click", function(){
    document.getElementById("lista2").innerHTML=null;
     
 });
 knapp3.addEventListener("click", function(){
    document.getElementById("lista3").innerHTML= null;
     
 });
 knapp4.addEventListener("click", function(){
    document.getElementById("lista4").innerHTML=null;
     
 });

//console log før å hjelpe meg å se 
/*
console.log(ul);
var lol="asdfasdf"
var a = ReverseString(lol);
console.log(a);

console.log(resetButton);
console.log(testButton);
console.log(newMain);
console.log(newPara);
console.log(sel)

*/
