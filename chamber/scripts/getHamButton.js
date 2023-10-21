const banner = document.querySelector('#banner');
const b_container = document.querySelector('.banner_container');
const button = document.querySelector('.banner_button');
const b_text = document.querySelector('.banner_text');

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
let day = weekday[today.getDay()];

function hideAnnouncment(){
	banner.style.display = 'none';
}

function getDayOfWeek(){
	if(day == 'Sunday'){
		banner.style.display = 'none';
	}
	else if(day=='Thursday'){
		banner.style.display = 'none';
	}
	else if(day=='Friday'){
		banner.style.display = 'none';
	}
	else if(day=='Saturday'){
		banner.style.display = 'none';
	}
	else{}
}

getDayOfWeek();