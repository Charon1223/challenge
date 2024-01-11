

function darkMode(mode){
  const body = document.body;

  if(mode === 'white'){
    body.classList.remove('darkmode');
  } else if(mode === 'black'){
    body.classList.add('darkmode');
  }
};