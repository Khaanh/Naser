$('.js-form-registr').on('focus', function() {
  $(this).parent().addClass('active')
})

$('.js-form-registr').on('blur', function() {
  if ($(this).val() == '') {
    $(this).parent().removeClass('active')
  }
})