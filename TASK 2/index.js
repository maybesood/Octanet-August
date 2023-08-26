let Btn = document.getElementsByClassName('btn')[0];
let Warn = document.getElementsByClassName('warning')[0];
const Input_Value = document.getElementsByClassName('input')[0];
const Completion_Time = document.getElementsByClassName('completion_time')[0];

Btn.addEventListener("click" , function(event){
    if(Input_Value.value.length > 0){
        Warn.style.display = 'none';
        let SHOW_LIST = document.getElementsByClassName('show_list')[0];
        const new_div = document.createElement('div');
        const list_value = document.createElement('li');
        const list_time = document.createElement('li');
        const list_completion_time = document.createElement('li');
        new_div.appendChild(list_value);
        new_div.appendChild(list_completion_time);
        new_div.appendChild(list_time);
        SHOW_LIST.appendChild(new_div);

        new_div.addEventListener("click" , function(event){
            new_div.style.textDecoration="line-through";
            new_div.style.fontWeight="lighter";
            new_div.style.scale="0.75";
            setTimeout(function(){
                new_div.remove();

            },90);
        });
        let d = new Date;
        let Input_time = d.getHours()+" : "+ d.getMinutes()+" : "+ d.getSeconds();
        list_time.innerHTML = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear() + " , Time - " + d.getHours() + ":"+ d.getMinutes() ;
        list_value.innerHTML = Input_Value.value;
        if(Completion_Time.value.length==0){
            list_completion_time.innerHTML = "---" ; 
        }
        else{
        list_completion_time.innerHTML = Completion_Time.value;
        }
    }
    else{
        Warn.style.display = 'block';
    }
    Input_Value.value = "";
    Completion_Time.value="";

});

