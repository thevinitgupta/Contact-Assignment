
$(()=>{
    console.log("jQuery loaded!!")
    $("#search").click((e)=>{
        console.log("Button Clicked!!")
        $("#example").dataTable({
            "ajax": {
                "url": "https://jsonplaceholder.typicode.com/todos",
                "dataSrc": ""
            },
            "columns" : [
                {"data" : "userId"},
                {"data" : "id"},
                {"data" : "title"},
                {"data" : "completed"},
            ]
        });  
    })
});