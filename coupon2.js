var heart=document.querySelectorAll(".fa-heart")
heart[0].style.color="red"
for(var i=0;i<heart.length;i++){
	heart[i].addEventListener("click",function(){
		if(this.style.color=="grey")
			this.style.color="red"
		else
			this.style.color="grey"
	})

	heart[i].addEventListener("mouseover",function(){
		this.style.border="1px solid lightgrey"
		this.style.padding="3px"
	})
	heart[i].addEventListener("mouseout",function(){
		this.style.border="none"
	})
}