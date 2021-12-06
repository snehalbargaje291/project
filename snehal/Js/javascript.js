burger= document.querySelector('.burger')
NavBar= document.querySelector('.nav-bar')
NavList= document.querySelector('.nav-list')



burger.addEventListener('click',()=>{
    NavList.classList.toggle('v-class');
    NavBar.classList.toggle('h-nav');
    NavBar.classList.toggle('ricon');
})

//form
let signUpForm = document.querySelector('.sign-up-form')
let logInForm = document.querySelector('.log-in-form')

signUpForm.addEventListener('click', ()=> {
	document.getElementById('id01').style.display='block'
})
logInForm.addEventListener('click', ()=> {
	document.getElementById('id02').style.display='block'
})

//sign-up

var modal = document.getElementById('id01');

		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}

//log-in

var modal = document.getElementById('id01');
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}