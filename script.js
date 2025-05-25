function toggleSobre() {
    const sobreText = document.getElementById('sobreText');
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