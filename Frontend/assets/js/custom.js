url="http://13.234.136.230:81/"
//url="http://192.168.0.106:81/"
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
    //   console.log(JSON.stringify({
    //     "data":await toBase64(file),
    // }));
      ajaxCall('users', await toBase64(file));
    }
    
    

    Main();  
}  

function ajaxCall(urlEndPoint, data) {
    $.ajax({
        type: 'POST',
        url: url + urlEndPoint,
    headers: {},
        dataType: 'json',
        data:JSON.stringify({
            "data":data
        }),
        processData: false,
        contentType: "application/json",
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

