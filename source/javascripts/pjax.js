$(document).pjax(
  'a[target!=_blank]', '#pjax-container', {
    fragment:'#pjax-container', 
    timeout:8000
  }
)
