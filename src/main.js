document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("header__nav--is-open");
    });

    // percorre cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        const targetId = button.dataset.tabButton; // exemplo: "livros" ou "filmes"
        const targetTab = document.querySelector(`[data-tab-id="${targetId}"]`);

        // 1 remove o ativo de todos os botões e abas
        buttons.forEach(b => b.classList.remove('midia__tabs__button--is-active'));
        tabs.forEach(t => t.classList.remove('midia__list--is-active'));

        // 2 ativa apenas o botão e a aba clicados
        button.classList.add('midia__tabs__button--is-active');
        targetTab.classList.add('midia__list--is-active');
        });
    });

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}