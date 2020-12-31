// scroll del home

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});



// intento de carrito


document.addEventListener('DOMContentLoaded', () => {

})

 const fetchData = async () => {

    try {
      const res = await fetch('api.json')
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
 }


   