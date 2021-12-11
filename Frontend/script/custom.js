
url="http://13.234.136.230:81/"

$(document).ready(function() {

    // $(".chosen-select").chosen({
    //     no_results_text: "Oops, nothing found!"
    // });
    // $("#messagebox").hide();
    // $("#messagebox2").hide();
    // $("data").appendTo('#messagebox1'); 
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        headers: {}
        //OR
        //beforeSend: function(xhr) { 
        //  xhr.setRequestHeader("My-First-Header", "first value"); 
        //  xhr.setRequestHeader("My-Second-Header", "second value"); 
        //}
    }).done(function(data) {
        console.log(data);
        // $.each(data.records,function(i,obj)
        //         {
        //         //  alert(obj.value+":"+obj.text);
        //          var div_data="<option value="+obj.id+">"+obj.fields.Name+"</option>";
        //         // alert(div_data);
        //         $(div_data).appendTo('#select_property'); 
        //         });
    });

});

function functionmyfunction() {   
    var file = $('#UnprocessedImage').prop('files');
    console.log(file);
    // return;
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    
    async function Main() {
      const file = document.querySelector('#UnprocessedImage').files[0];
      console.log(await toBase64(file));
      ajaxCall('users', file);
    }
    
    

    Main();  
}  


function ajaxCall(urlEndPoint, data) {
    $.ajax({
        type: 'GET',
        url: url + urlEndPoint,
        headers: {}
        //OR
        //beforeSend: function(xhr) { 
        //  xhr.setRequestHeader("My-First-Header", "first value"); 
        //  xhr.setRequestHeader("My-Second-Header", "second value"); 
        //}
    }).done(function(data) { 
        console.log(data);
        // $.each(data.records,function(i,obj)
        //         {
        //         //  alert(obj.value+":"+obj.text);
        //          var div_data="<option value="+obj.id+">"+obj.fields.Name+"</option>";
        //         // alert(div_data);
        //         $(div_data).appendTo('#select_property'); 
        //         });
    });

}

