/*---- Dropdown hover effect ----*/

$('.dropdown').hover(function(){
    $('.dropdown-content').css("display","block");
},function(){
    $('.dropdown-content').hide();
});


/*---- Offcanvas ----*/

$('.offcanvas-toggle').on('click', function() {
  $('body').toggleClass('offcanvas-expanded');
});

$('.offcanvas-toggle').on('click', function(){
	$(this).toggleClass('offcanvas-toggle--active');
});


/*----- Form validation -----*/

function validate(){

	var error="";
	var name = document.getElementById( 'name_of_user' );
	if( name.value == '' ){
		alert('You Have To Write Your Name. ');
		return false;
	}
	var email = document.getElementById( 'email_of_user' );
	if( email.value == '' || email.value.indexOf( '@' ) == -1 || email.value.indexOf( "." ) == -1 ){
		alert(' You Have To Write Valid Email Address. ');
		return false;
	}
	var message = document.getElementById( 'message_of_user' );
	if( message.value == ''){
		alert(' Type Your Message! ');
		return false;
	}
	else{
		return true;
	}

}

/*---- Ajax form ----*/


$('form.ajax').on('submit',function(){
	var that = $(this),
		url = that.attr('action'),
		type = that('method'),
		data = {};

	that.find('[name]').each(function(index,value){
		var that = $(this),
			name = that.attr('name'),
			value = that.val();

		data[name] = value;
	});
	$.ajax({
		url: url,
		type: type,
		data: data,

		success: function(response) {
			console.log(response);
		}
	});
	return false;
});


/*---- Clear form fields ----*/

function clearForms(){
	var i;
	for (i = 0; (i < document.forms.length); i++) {
		document.forms[i].reset();

	}
}


/*---- Slider ----*/

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].className += ' active';
   
}

