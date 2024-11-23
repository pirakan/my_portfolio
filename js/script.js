/*============= typing animation =============*/

var typed = new Typed(".typing",{
	strings:["Web Designer","Web Developer",],
	typeSpeed:100,
	BackSpeed:60,
	loop:true
});

const activeClass = document.querySelectorAll(".nav li a");

activeClass.forEach((item)=> {
	item.addEventListener("click",() => {
		const elems = document.querySelector(".active");
	    if(elems) {
	      elems.classList.remove("active");
	    }
		item.classList.add("active");
	});
})