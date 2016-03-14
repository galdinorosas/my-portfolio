$(document).ready(function(){


	$('.aboutMeLink').on('click', function(){
		$('#homeContainer').css('display',  'none');
		$('#projectsContainer').css('display', 'none');
		$('#interestsContainer').css('display', 'none');
		$('#aboutMeContainer').css('display','block');
	});

	$('.dropdown-menu li:nth-child(1) a').on('click', function(){
		$('#homeContainer').css('display',  'none');
		$('#aboutMeContainer').css('display','none');
		$('#interestsContainer').css('display', 'none');
		$('#projectsContainer').css('display', 'block');
	});

	$('.navList li:nth-child(3) a').on('click', function(){
		$('#homeContainer').css('display',  'none');
		$('#aboutMeContainer').css('display','none');
		$('#projectsContainer').css('display', 'none');
		$('#interestsContainer').css('display', 'block');

	});


});