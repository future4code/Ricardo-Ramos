let postagens = []

function formDoPost() {
    let titulo = document.getElementById("titulo-post")
    let autor = document.getElementById("autor-post")
    let texto = document.getElementById("conteudo-post")

    let dadosDoPost = {
        titulo: titulo.value,
        autor: autor.value,
        texto: texto.value
    }

    postagens.push(dadosDoPost)
    titulo.value = ""
    autor.value = ""
    texto.value = ""
    inserirNovoPost()
}

function hierarquiaPost(infosDoForm) {
    return "<article>" +
    "<h2>" + infosDoForm.titulo + "</h2>" +
    "<h5>" + infosDoForm.autor + "</h5>" + 
    "<p>" + infosDoForm.texto + "</p>" +
    "</article>"
}

function inserirNovoPost() {
    let container = document.getElementById("container-de-posts")
    container.innerHTML = ""
    for(post of postagens) {
        container.innerHTML += hierarquiaPost(post)
    }
}