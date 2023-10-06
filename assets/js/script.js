var image=[
  "./assets/img/1.jpg",
  "./assets/img/4.jpg",
  "./assets/img/9.jpg",
  "./assets/img/10.jpg",
  "./assets/img/11.jpg"
];

var i=0;
function slide(){
  document.getElementById("img1").src=image[i];
  if(i<(image.length-1))
       i++;
    else
    i=0;
}
setInterval(slide,1000);