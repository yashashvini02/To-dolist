document.addEventListener("DOMContentLoaded",()=>
{
    let val=document.querySelector(".int")
    let list=document.querySelector(".list-container");
    let btn=document.querySelector(".btn");
    btn.addEventListener("click",()=>
    {
        if(val.value==='')
        {
            alert("Enter something to add!");
        }
        else {
        let li=document.createElement('li');
        list.appendChild(li);
        console.log(val.value);
        li.textContent=val.value;
        let span=document.createElement('span');
        li.appendChild(span);
       span.textContent = '✖';  
        }
        val.value='';
 savedata()
    })
    list.addEventListener("click",(e)=>
    {
        if(e.target.tagName==='LI')
        {
          
            e.target.classList.toggle('checked');
             savedata()
        }
        else if(e.target.tagName==='SPAN'){
            confirm("Are you sure to remove?")
  
            e.target.parentElement.remove();
             savedata()
        }
    })
    function savedata()
    {
        localStorage.setItem("con",list.innerHTML);

    }
    function get()
    {
        list.innerHTML=localStorage.getItem("con");
    }
    get();
})