const buttonOnee = document.querySelector('#button-one');
buttonOnee.addEventListener('click', (e) => {
	document.getElementById('text').textContent = 'Chemical Hearts';
	
})


const buttonOne = document.getElementById('button-one');
buttonOne.onclick = one;
let countOne = 0;
function one(){	
	countOne += 1;
	 buttonOne.innerHTML = "💙 " + countOne;
}


const buttonTwo = document.querySelector('#button-two');
buttonTwo.addEventListener('click', (e) => {
	//document.querySelector('#button-two').style.background = '#9fe6a0';
	//document.querySelector('#button-two').style.background = '#000';
	document.querySelector('#button-two').style.opacity = "0.5";
	document.getElementById('text').textContent = 'On Amazon Prime';
	document.getElementById('body').style.background = '#000';
})


const buttonThree = document.getElementById('button-three');
buttonThree.addEventListener('click', (e) => {
	//document.getElementById('button-three').textContent = 'BTS fan?';
	document.getElementById('button-three').style.fontStyle = 'Italic';

	document.getElementById('button-three').style.background = '#faf3f3';
	document.getElementById('body').style.background = '#867ae9';
	document.body.style.backgroundImage = "url('chemgif1.gif')";
})

const buttonFour = document.getElementById('button-four');
buttonFour.addEventListener('click', (e) => {
	document.querySelector('#body').style.display = 'none';
})
