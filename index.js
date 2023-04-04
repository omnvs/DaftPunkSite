fetch("dataNEW.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#image-data");
   let out = "";
   for(let item of items){
      out += `
         <div class="image-info" data-id="${item.id}">
            <div class="left">
               <div class="info">${item.publication/photographer}</div>
               <div class="info">${item.year}</div>
               <div class="info">${item.era}</div>
               <div class="info">${item.type}</div>
            </div>
         </div>
      `;
   }
 
   placeholder.innerHTML = out;

   // Add event listeners to images
   $(".image-container img").hover(function() {
      var id = $(this).data("id");
      $(".image-info[data-id='" + id + "']").fadeIn();
   }, function() {
      var id = $(this).data("id");
      $(".image-info[data-id='" + id + "']").fadeOut();
   });
});

//

fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#image-data");
   let out = "";
   for(let item of items){
      out += `
         <div class="left">
            <div class="info">${item.publication/photographer}</div>
            <div class="info">${item.year}</div>
            <div class="info">${item.era}</div>
            <div class="info">${item.type}</div>
         </div>
      `;
   }

   placeholder.innerHTML = out;

   fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#image-data");
   let out = "";
   for(let item of items){
      out += `
         <div class="left">
            <div class="info">${item.publication/photographer}</div>
            <div class="info">${item.year}</div>
            <div class="info">${item.era}</div>
            <div class="info">${item.type}</div>
         </div>
      `;
   }

   placeholder.innerHTML = out;

   // Add event listeners to images
   let images = document.querySelectorAll(".image-class"); // Replace ".image-class" with the class name or selector of your images
   images.forEach(function(image) {
      image.addEventListener("mouseover", function() {
         // Code to display data on hover
         // For example, you can access the data using "item" object and update a tooltip element with the data
         let tooltip = document.querySelector(".tooltip"); // Replace ".tooltip" with the selector of your tooltip element
         tooltip.innerHTML = `
            <div class="tooltip-content">
               <div class="tooltip-info">${item.publication/photographer}</div>
               <div class="tooltip-info">${item.year}</div>
               <div class="tooltip-info">${item.era}</div>
               <div class="tooltip-info">${item.type}</div>
            </div>
         `;
         tooltip.style.display = "block"; // Show the tooltip
      });
      image.addEventListener("mouseout", function() {
         // Code to hide data when mouseout
         // For example, you can update the tooltip element to hide the data
         let tooltip = document.querySelector(".tooltip"); // Replace ".tooltip" with the selector of your tooltip element
         tooltip.style.display = "none"; // Hide the tooltip
      });
   });
});

