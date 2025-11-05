document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');

    // percorre cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        const targetId = button.dataset.tabButton; // exemplo: "livros" ou "filmes"
        const targetTab = document.querySelector(`[data-tab-id="${targetId}"]`);

        // 1️⃣ remove o ativo de todos os botões e abas
        buttons.forEach(b => b.classList.remove('midia__tabs__button--is-active'));
        tabs.forEach(t => t.classList.remove('midia__list--is-active'));

        // 2️⃣ ativa apenas o botão e a aba clicados
        button.classList.add('midia__tabs__button--is-active');
        targetTab.classList.add('midia__list--is-active');
        });
    });
});
