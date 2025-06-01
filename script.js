// Função para alternar a exibição do texto "Sobre mim"
function toggleSobre() {
    // Seleciona o elemento com o id 'sobreText'
    const sobreText = document.getElementById('sobreText');
    // Adiciona ou remove a classe 'open' para mostrar ou esconder o conteúdo
    sobreText.classList.toggle('open');
}

function toggleHabilidades() {
    const habilidadesText = document.getElementById('habilidadesText');
    habilidadesText.classList.toggle('open');
}

function toggleProjetos() {
    const projetosText = document.getElementById('projetosText');
    projetosText.classList.toggle('open');
}

function toggleExperiencias() {
    const experienciasText = document.getElementById('experienciasText');
    experienciasText.classList.toggle('open');
}

function toggleContato() {
    const contatoText = document.getElementById('contatoText');
    contatoText.classList.toggle('open');
}

function toggleCertificados() {
    const certificadosText = document.getElementById('certificadosText');
    certificadosText.classList.toggle('open');
}

// Função para enviar o formulário de contato via AJAX para o Formspree, 
// evitando recarregar a página e exibindo alertas de sucesso ou erro.
async function handleSubmit() {
    event.preventDefault();
    const form = document.getElementById('FormContato');
    const data = new FormData(form);
    try {
        const response = await fetch('https://formspree.io/f/mwpodqoz', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        } else {
            alert("Erro ao enviar a mensagem. Tente novamente.");
        }
    } catch (error) {
        alert("Erro ao enviar a mensagem. Tente novamente.");
    }
    return false;
}