 /*
    
    image data format
     

    description: "A unicorn and a narwhal nuzzling their horns"
horns: 1
image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
keyword: "narwhal"
title: "UniWhal"

    */

function ImageViewer() {
   this.img_data = [];
   this.current_data = [];
   this.display_images = function() {
       $("main").html("");
    this.current_data.forEach(function(item) {
        $("main").append(`
        <div class="photo-template">
        <div>
        <img src="${item.image_url}" alt="">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        </div>
      </div>`)
      })
   }
   this.filter_images = function(keyword) {
       console.log("keyword slelected")
       if(keyword== "all") {
          this.current_data=this.img_data;
       }

       else {
           console.log("filtering dsta by keyword")
        this.current_data = this.img_data.filter(function(item) {
            return item.keyword.toLowerCase() == keyword.toLowerCase();
        });
       }
     
     this.display_images();
   }
   
}

var imageViewer = new ImageViewer();

$.get("http://localhost:8080/page-1.json", function(data) {
    //console.log(data);
    
    

    imageViewer.img_data = data;
    imageViewer.current_data = imageViewer.img_data //for now
    imageViewer.img_data.forEach((item) => {
        $("#keyword-select").append(`<option value="${item.keyword}">Filter by ${item.keyword}</option>`)
    })
    imageViewer.display_images();
    $('#keyword-select').change(function(){
        var selected_keyword = $(this).val();
        imageViewer.filter_images(selected_keyword);
    });
    $("#keyword-search + button").on("click", function() {
        var input_val = $("#keyword-search").val();
        imageViewer.filter_images(input_val);
    })
    $("#keyword-search").on("keypress", function(e) {
        var code = e.keyCode || e.which;
       if(code == 13) { 
         var input_val = $(this).val();
         imageViewer.filter_images(input_val)
       }
        
    })

})