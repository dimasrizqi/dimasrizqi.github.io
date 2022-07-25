/* VARIABLE START */
let 
	$app = 'http://mts-web02.makarim.com/',
	$api = $app + 'index.php/',
	$form = $('#form'), 
	$submit = $('#submit'), 
	$email = $('#email');
/* VARIABLE END */


/* FUNCTION START */
function init() {

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	if (queryString !== null && queryString !== '' && urlParams.has('signout') && urlParams.get('signout') === 'true') {

		$.get($api + 'signout');

		display_form();

	} else {

		signin_check();
	}
}

function display_form() {

	$('body').removeClass('visually-hidden');

	$('input').prop('readonly', false);

	$submit.prop('disabled', false).html('Sign in');

    $email.focus(); 

	/* FORM START */
	$form.on('submit', function() {

		$('input').prop('readonly', true);

		$submit.prop('disabled', true).html('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>');

		$.ajax({
			url: $api+'signin',
			method: 'POST',
			dataType: 'json',
			data: {
				email: $email.val(), 
				password: $('#password').val()
			},
			success: function(result) {

				if (result.status === 'success'){

					signin_check();
	
				} else {
	
					alert(result.message);

					$('input').prop('readonly', false);

					$email.focus();

					$submit.prop('disabled', false).html('Sign in');
				}
			}
		});

		return false;
	});
	/* FORM END */
}

function signin_check() {

	$.ajax({
		url: $api + 'signin_check',
		dataType: 'json',
		success: function(result) {

			if (result.status === 'success'){

				window.location.href = $app + result.data;

			} else {

				display_form();
			}
		}
	});
}
/* FUNCTION END */


/* INIT START */
init();
/* INIT END */
