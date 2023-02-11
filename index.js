const data=document.getElementById('data');
const arrow=document.getElementById('arrow');
const adiv=document.getElementById('adiv');
const sec=document.getElementById('sec');
const edit=document.getElementById('edit');
const delet=document.getElementById('delete');

const updateMethod=()=>{
    const teaxtAreas=document.querySelectorAll('textarea');
    var Notes=[]

  teaxtAreas.forEach((data)=>{
    return Notes.push(data.value)
    
  })
localStorage.setItem('Notes', JSON.stringify(Notes))
}

adiv.addEventListener('mouseover',()=>{
   arrow.classList.value="fa fa-sign-in";
   data.style.marginLeft="10px"
   data.style.marginRight="35px"
    adiv.style.transition="all 2s";
    arrow.style.marginLeft="17px"
    arrow.style.marginTop="15px"
    adiv.style.background="red";

})
adiv.addEventListener('mouseleave',()=>{
    arrow.classList.value="fa fa-chevron-right";
    data.style.marginLeft="15px"
   data.style.marginRight="35px"
   arrow.style.marginLeft="17px"
   arrow.style.marginTop="15px"
   adiv.style.transition="all 2s";
   adiv.style.background="rgb(255, 196, 0)";

})

adiv.addEventListener('click',()=>addNote());

const addNote=(text='')=>{
const note=document.createElement('div');
note.classList.add("note");
const htmldata=`<div class="outer">
    <div class="operation">
        <i class="fa fa-pencil-square-o" id="edit"></i>
        <i class="fa fa-trash-o" id="delete"></i>  
    </div>
    <div id="high">
   <aside id="ed1" class="highlighter"></aside>
   <aside id="del1" class="highlighter"></aside>
</div>
</div>
<div class="main">
<textarea id="textarea" ${text?"readonly":''}></textarea>
</div>`;
note.insertAdjacentHTML('afterbegin',htmldata);
const editButton=note.querySelector('#edit');
const ed1=note.querySelector('#ed1');
const del1=note.querySelector('#del1')
const delButton=note.querySelector('#delete');
const mainDiv=note.querySelector('.main');
const textareaB=note.querySelector('#textarea');



delButton.addEventListener('click',()=>{
    note.remove();
    updateMethod()
    
})
if(text!=''){
textareaB.innerHTML=text;
}
editButton.addEventListener('mouseover',()=>{
    ed1.innerHTML="edit";
})
editButton.addEventListener('mouseleave',()=>{
    ed1.innerHTML="";
})
delButton.addEventListener('mouseover',()=>{
    del1.innerHTML="delete";
})
delButton.addEventListener('mouseleave',()=>{
    del1.innerHTML="";
})
editButton.addEventListener('click',()=>{
    value=textareaB.getAttribute('readonly');
    if(value==null){
        textareaB.setAttribute('readonly','');
        // console.log("added")
    }
    else{
        console.log(textareaB.getAttribute('readonly'))
        textareaB.removeAttribute('readonly');
    }



    
})
textareaB.addEventListener('change',()=>{
    value=textareaB.getAttribute('readonly');
    if(value==null){
        textareaB.setAttribute('readonly','');
        console.log("added")
    }
    else{
        console.log(textareaB.getAttribute('readonly'))
        textareaB.removeAttribute('readonly');
    }
    updateMethod();
})
sec.appendChild(note)

}
const Mydata=JSON.parse(localStorage.getItem('Notes'));
Mydata.forEach((note)=>{
   addNote(note)
})
