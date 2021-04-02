const faq = document.querySelector('.faq-wrapper');
const faqs = document.querySelectorAll('.faq');
const questions = document.querySelectorAll('.question');

questions.forEach((question, idx) => {
    question.addEventListener('click', e => {
        faqs.forEach(faq => {
            faq.classList = 'faq';
        });

        faqs[idx].classList = 'faq active';
    });
});

faq.addEventListener('click', e => {
    if (e.target.classList.contains('arrow-down')) {
        console.log('clicked');
    }
});
