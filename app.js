function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
      section.innerHTML = "<p>É necessário escrever para acharmos algo.</p>" 
      return
    }

      campoPesquisa = campoPesquisa.toLowerCase()  
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado no array de dados
    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if( dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)){
          // Cria uma nova div para cada resultado, formatando o HTML
        resultados += `
      <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta"> ${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a> 
      </div>
    `;
      }  
      
    }

    if(!resultados){
      resultados = "<p>Classe não encontrada 🤦‍♂️</p>" 

    }
  
    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
  }
