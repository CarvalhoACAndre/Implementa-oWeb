function switchObjectives() {
  if (document.getElementById('Div1')) {

      if (document.getElementById('Div1').style.display == 'none') {
          document.getElementById('Div1').style.display = 'block';
          document.getElementById('objetivosHidden').style.display = 'none';
      }
      else {
          document.getElementById('Div1').style.display = 'none';
          document.getElementById('Div2').style.display = 'none';
          document.getElementById('Div3').style.display = 'none';
          document.getElementById('Div4').style.display = 'none';
          document.getElementById('objetivosHidden').style.display = 'block';
      }
  }
}

function switchBackObjective() {
  if (document.getElementById('objetivosHidden')) {

      if (document.getElementById('objetivosHidden').style.display == 'none') {
          document.getElementById('objetivosHidden').style.display = 'block';
          document.getElementById('Div1').style.display = 'none';
      }
      else {
          document.getElementById('objetivosHidden').style.display = 'none';
          document.getElementById('Div1').style.display = 'block';
          document.getElementById('Div2').style.display = 'block';
          document.getElementById('Div3').style.display = 'block';
          document.getElementById('Div4').style.display = 'block';
      }
  }
}

function switchMinisterio() {
  if (document.getElementById('Div2')) {

      if (document.getElementById('Div2').style.display == 'none') {
          document.getElementById('Div2').style.display = 'block';
          document.getElementById('objetivosHidden').style.display = 'none';
      }
      else {
          document.getElementById('Div1').style.display = 'none';
          document.getElementById('Div2').style.display = 'none';
          document.getElementById('Div3').style.display = 'none';
          document.getElementById('Div4').style.display = 'none';
          document.getElementById('ministerioHidden').style.display = 'block';
      }
  }
}

function switchBackMinisterio() {
  if (document.getElementById('ministerioHidden')) {

      if (document.getElementById('ministerioHidden').style.display == 'none') {
          document.getElementById('ministerioHidden').style.display = 'block';
          document.getElementById('Div1').style.display = 'none';
      }
      else {
          document.getElementById('ministerioHidden').style.display = 'none';
          document.getElementById('Div1').style.display = 'block';
          document.getElementById('Div2').style.display = 'block';
          document.getElementById('Div3').style.display = 'block';
          document.getElementById('Div4').style.display = 'block';
      }
  }
}

function switchDirecao() {
  if (document.getElementById('Div3')) {

      if (document.getElementById('Div3').style.display == 'none') {
          document.getElementById('Div3').style.display = 'block';
          document.getElementById('direcaoHidden').style.display = 'none';
      }
      else {
          document.getElementById('Div1').style.display = 'none';
          document.getElementById('Div2').style.display = 'none';
          document.getElementById('Div3').style.display = 'none';
          document.getElementById('Div4').style.display = 'none';
          document.getElementById('direcaoHidden').style.display = 'block';
      }
  }
}

function switchBackDirecao() {
  if (document.getElementById('direcaoHidden')) {

      if (document.getElementById('direcaoHidden').style.display == 'none') {
          document.getElementById('direcaoHidden').style.display = 'block';
          document.getElementById('Div3').style.display = 'none';
      }
      else {
          document.getElementById('direcaoHidden').style.display = 'none';
          document.getElementById('Div1').style.display = 'block';
          document.getElementById('Div2').style.display = 'block';
          document.getElementById('Div3').style.display = 'block';
          document.getElementById('Div4').style.display = 'block';
      }
  }
}

function menu() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}