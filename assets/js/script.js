
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


$(document).ready(function(){

    /* on scroll heading visibility */
    $(window).scroll(function(){

        var docPos = $(document).scrollTop();
        if (docPos >= '0' && docPos < '600') {
            $('#profile').removeClass('profile-next');
            $('#hdr-txt-one').css({'margin-top': '-9vh'});
            $('#hdr-txt-one').css({'opacity': '1'});
            $('#hdr-txt-two').css({'opacity': '0'});
            $('#hdr-txt-three').css({'opacity': '0'});
            $('#hdr-txt-four').css({'opacity': '0'});
            $('#hdr-txt-five').css({'opacity': '0'});
        } else if (docPos >='600' && docPos < '1200') {
            $('#profile').addClass('profile-next');
            $('#hdr-txt-one').css({'margin-top': '-17vh'});
            $('#hdr-txt-one').css({'opacity': '0'});
            $('#hdr-txt-two').css({'opacity': '1'});
            $('#hdr-txt-three').css({'opacity': '0'});
            $('#hdr-txt-four').css({'opacity': '0'});
            $('#hdr-txt-five').css({'opacity': '0'});
        } else if (docPos >='1200' && docPos < '1800') {
            $('#profile').addClass('profile-next');
            $('#hdr-txt-one').css({'margin-top': '-24vh'});
            $('#hdr-txt-one').css({'opacity': '0'});
            $('#hdr-txt-two').css({'opacity': '0'});
            $('#hdr-txt-three').css({'opacity': '1'});
            $('#hdr-txt-four').css({'opacity': '0'});
            $('#hdr-txt-five').css({'opacity': '0'});
        } else if (docPos >='1800' && docPos < '2400') {
            $('#profile').addClass('profile-next');
            $('#hdr-txt-one').css({'margin-top': '-31.5vh'});
            $('#hdr-txt-one').css({'opacity': '0'});
            $('#hdr-txt-two').css({'opacity': '0'});
            $('#hdr-txt-three').css({'opacity': '0'});
            $('#hdr-txt-four').css({'opacity': '1'});
            $('#hdr-txt-five').css({'opacity': '0'});
        } else if (docPos >='2400' && docPos < '3000') {
            $('#profile').addClass('profile-next');
            $('#hdr-txt-one').css({'margin-top': '-38.5vh'});
            $('#hdr-txt-one').css({'opacity': '0'});
            $('#hdr-txt-two').css({'opacity': '0'});
            $('#hdr-txt-three').css({'opacity': '0'});
            $('#hdr-txt-four').css({'opacity': '0'});
            $('#hdr-txt-five').css({'opacity': '1'});
        } 

    });

    /* testing scroll position */
    function sw(){
        var txt = $(document).scrollTop();
        $('#txt').html(txt);
    }
    setInterval(sw,00000);

});