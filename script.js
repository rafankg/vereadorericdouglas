function togglemode() {
    const html = document.documentElement
  
    // se tem o dark tira, se n tem coloca
    if(html.classList.contains('dark')) {
    html.classList.remove('dark')
  } else {
    html.classList.add('dark')
  }
    // Pegar a tag img
    const img = document.querySelector('#profile img');
  
    // Substituir a imagem
    if (html.classList.contains('dark')) {
      // Se estiver no modo escuro, adicionar a imagem escura
      img.setAttribute('src', 'Avatar0099.png');
    } else {
      // Se não estiver no modo escuro, manter a imagem normal
      img.setAttribute('src', 'avatar.png');
    }
  
  }