    let notas = [];
    let indiceEdicao = null; // controla se estamos editando

    // Função para adicionar ou editar
    function adicionarOuEditarNota() {
      const input = document.getElementById("notaInput");
      const mensagem = document.getElementById("mensagem");
      let texto = input.value.trim();

      if (texto === "") {
        mensagem.style.color = "red";
        mensagem.innerHTML = "⚠️ Digite uma anotação válida!";
      } else {
        if (indiceEdicao === null) {
          // Adiciona nova anotação
          notas.push(texto);
          mensagem.style.color = "green";
          mensagem.innerHTML = "✅ Anotação adicionada!";
        } else {
          // Edita anotação existente
          notas[indiceEdicao] = texto;
          mensagem.style.color = "orange";
          mensagem.innerHTML = "✏️ Anotação editada!";
          indiceEdicao = null;
          document.querySelector(".btn-add").innerText = "Adicionar";
        }
        input.value = "";
        atualizarLista();
      }
    }

    // Função para remover
    function removerNota(indice) {
      notas.splice(indice, 1);
      document.getElementById("mensagem").style.color = "blue";
      document.getElementById("mensagem").innerHTML = "🗑️ Anotação removida!";
      atualizarLista();
    }

    // Função para editar
    function editarNota(indice) {
      const input = document.getElementById("notaInput");
      input.value = notas[indice]; // carrega anotação no campo
      indiceEdicao = indice;
      document.querySelector(".btn-add").innerText = "Salvar";
      document.getElementById("mensagem").style.color = "orange";
      document.getElementById("mensagem").innerHTML = "✏️ Editando anotação...";
    }

    // Atualiza lista
    function atualizarLista() {
      const lista = document.getElementById("listaNotas");
      lista.innerHTML = "";
      for (let i = 0; i < notas.length; i++) {
        lista.innerHTML += `
          <li>
            ${notas[i]}
            <div>
              <button class="btn-edit" onclick="editarNota(${i})">Editar</button>
              <button class="btn-remove" onclick="removerNota(${i})">Remover</button>
            </div>
          </li>
        `;
      }
    }