console.log("hello");

//when mouse hovers over ego, show image 
var ego = document.querySelector(".box4");
var imageOne = document.querySelector(".image1");

ego.addEventListener("mouseover", function(){
    imageOne.style.display = "block";
})

ego.addEventListener("mouseleave", function(){
    imageOne.style.display = "none";  
  })

//when mouse hovers over international style, show image 
var intStyle = document.querySelector(".box7");
var imageTwo = document.querySelector(".image2");

intStyle.addEventListener("mouseover", function(){
    imageTwo.style.display = "block";
})

intStyle.addEventListener("mouseleave", function(){
    imageTwo.style.display = "none";  
  })

//when mouse hovers over german script, show image 
var german = document.querySelector(".box10");
var imageThree = document.querySelector(".image3");

german.addEventListener("mouseover", function(){
    imageThree.style.display = "block";
})

german.addEventListener("mouseleave", function(){
    imageThree.style.display = "none";  
  })

//when mouse hovers over centered type, show image 
var center = document.querySelector(".box13");
var imageFour = document.querySelector(".image4");

center.addEventListener("mouseover", function(){
    imageFour.style.display = "block";
})

center.addEventListener("mouseleave", function(){
    imageFour.style.display = "none";  
  })

//when mouse hovers over Feminist Typography, show image 
var fem = document.querySelector(".box16");
var imageFive = document.querySelector(".image5");

fem.addEventListener("mouseover", function(){
    imageFive.style.display = "block";
})

fem.addEventListener("mouseleave", function(){
    imageFive.style.display = "none";  
  })

  //when mouse hovers over design system, show image 
var design = document.querySelector(".box19");
var imageSix = document.querySelector(".image6");

design.addEventListener("mouseover", function(){
    imageSix.style.display = "block";
})

design.addEventListener("mouseleave", function(){
    imageSix.style.display = "none";  
  })

  //when mouse hovers over hate the reader, show image 
var hate = document.querySelector(".box22");
var imageSeven = document.querySelector(".image7");

hate.addEventListener("mouseover", function(){
    imageSeven.style.display = "block";
})

hate.addEventListener("mouseleave", function(){
    imageSeven.style.display = "none";  
  })

  //when mouse hovers over cultural field, show image 
var culture = document.querySelector(".box25");
var imageEight = document.querySelector(".image8");

culture.addEventListener("mouseover", function(){
    imageEight.style.display = "block";
})

culture.addEventListener("mouseleave", function(){
    imageEight.style.display = "none";  
  })