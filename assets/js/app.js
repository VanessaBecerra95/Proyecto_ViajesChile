//smoth scroll//
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//boton de enviar formulario//

$(function () {
  $("#enviar-formulario").click(function () {
    alert("Tus datos han sido enviado correctamente...");
  });
});
