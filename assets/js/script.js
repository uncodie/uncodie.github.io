
$(document).ready(function(){

	window.setInterval(function(){

		var fontOne = $('.intro-font:nth-child(1)').attr('id');
		var fontTwo = $('.intro-font:nth-child(2)').attr('id');
		var fontThree = $('.intro-font:nth-child(3)').attr('id');
		var fontFour = $('.intro-font:nth-child(4)').attr('id');
		var fontFive = $('.intro-font:nth-child(5)').attr('id');
		var fontSix = $('.intro-font:nth-child(6)').attr('id');

		if(fontOne == 'font-one'){
			$('.intro-font:nth-child(1)').attr('id', 'font-six');
		} else if(fontOne == 'font-two'){
			$('.intro-font:nth-child(1)').attr('id', 'font-one');
		} else if(fontOne == 'font-three'){
			$('.intro-font:nth-child(1)').attr('id', 'font-two');
		} else if(fontOne == 'font-four'){
			$('.intro-font:nth-child(1)').attr('id', 'font-three');
		} else if(fontOne == 'font-five'){
			$('.intro-font:nth-child(1)').attr('id', 'font-four');
		} else {
			$('.intro-font:nth-child(1)').attr('id', 'font-five');
		}

		if(fontTwo == 'font-one'){
			$('.intro-font:nth-child(2)').attr('id', 'font-six');
		} else if(fontTwo == 'font-two'){
			$('.intro-font:nth-child(2)').attr('id', 'font-one');
		} else if(fontTwo == 'font-three'){
			$('.intro-font:nth-child(2)').attr('id', 'font-two');
		} else if(fontTwo == 'font-four'){
			$('.intro-font:nth-child(2)').attr('id', 'font-three');
		} else if(fontTwo == 'font-five'){
			$('.intro-font:nth-child(2)').attr('id', 'font-four');
		} else {
			$('.intro-font:nth-child(2)').attr('id', 'font-five');
		}

		if(fontThree == 'font-one'){
			$('.intro-font:nth-child(3)').attr('id', 'font-six');
		} else if(fontThree == 'font-two'){
			$('.intro-font:nth-child(3)').attr('id', 'font-one');
		} else if(fontThree == 'font-three'){
			$('.intro-font:nth-child(3)').attr('id', 'font-two');
		} else if(fontThree == 'font-four'){
			$('.intro-font:nth-child(3)').attr('id', 'font-three');
		} else if(fontThree == 'font-five'){
			$('.intro-font:nth-child(3)').attr('id', 'font-four');
		} else {
			$('.intro-font:nth-child(3)').attr('id', 'font-five');
		}

		if(fontFour == 'font-one'){
			$('.intro-font:nth-child(4)').attr('id', 'font-six');
		} else if(fontFour == 'font-two'){
			$('.intro-font:nth-child(4)').attr('id', 'font-one');
		} else if(fontFour == 'font-three'){
			$('.intro-font:nth-child(4)').attr('id', 'font-two');
		} else if(fontFour == 'font-four'){
			$('.intro-font:nth-child(4)').attr('id', 'font-three');
		} else if(fontFour == 'font-five'){
			$('.intro-font:nth-child(4)').attr('id', 'font-four');
		} else {
			$('.intro-font:nth-child(4)').attr('id', 'font-five');
		}

		if(fontFive == 'font-one'){
			$('.intro-font:nth-child(5)').attr('id', 'font-six');
		} else if(fontFive == 'font-two'){
			$('.intro-font:nth-child(5)').attr('id', 'font-one');
		} else if(fontFive == 'font-three'){
			$('.intro-font:nth-child(5)').attr('id', 'font-two');
		} else if(fontFive == 'font-four'){
			$('.intro-font:nth-child(5)').attr('id', 'font-three');
		} else if(fontFive == 'font-five'){
			$('.intro-font:nth-child(5)').attr('id', 'font-four');
		} else {
			$('.intro-font:nth-child(5)').attr('id', 'font-five');
		}

		if(fontSix == 'font-one'){
			$('.intro-font:nth-child(6)').attr('id', 'font-six');
		} else if(fontSix == 'font-two'){
			$('.intro-font:nth-child(6)').attr('id', 'font-one');
		} else if(fontSix == 'font-three'){
			$('.intro-font:nth-child(6)').attr('id', 'font-two');
		} else if(fontSix == 'font-four'){
			$('.intro-font:nth-child(6)').attr('id', 'font-three');
		} else if(fontSix == 'font-five'){
			$('.intro-font:nth-child(6)').attr('id', 'font-four');
		} else {
			$('.intro-font:nth-child(6)').attr('id', 'font-five');
		}

	}, 2000);

});