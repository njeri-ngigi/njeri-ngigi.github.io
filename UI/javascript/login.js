function display(id){
		if (id=="login"){
			document.getElementById('signup').style.display='none'
		}
		if (id=="signup"){
			document.getElementById('login').style.display='none'
		}
		document.getElementById(id).style.display='block'
		document.getElementById("welcome").style.display='none'


	}