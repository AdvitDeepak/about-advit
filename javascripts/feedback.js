var feedback = document.forms.feedback
feedback.addEventListener("submit", function(ev) {
  ev.preventDefault()

  /* Retrieve and send feedback */
  var page = document.location.pathname
  var data = ev.submitter.getAttribute("data-md-value")
})
