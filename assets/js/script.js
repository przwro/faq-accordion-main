const buttons = document.querySelectorAll(".faq-question button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const faqItem = button.closest("li");
        const answer = faqItem.querySelector(".faq-answer");

        closeOtherItems(faqItem);
        toggleActiveState(faqItem, button, answer);
    });
});

const closeOtherItems = (faqItem) => {
    const allFaqItems = document.querySelectorAll(".faq-list-item");
    allFaqItems.forEach((item) => {
        if (item !== faqItem) {
            const otherAnswer = item.querySelector(".faq-answer");
            const otherButton = item.querySelector("button");
            item.classList.remove("active");
            otherAnswer.style.display = "none";
            otherButton
                .querySelector("img")
                .setAttribute("src", "/assets/images/icon-plus.svg");
            otherButton.setAttribute("aria-expanded", "false");
        }
    });
};

const toggleActiveState = (faqItem, button, answer) => {
    const isActive = faqItem.classList.contains("active");
    faqItem.classList.toggle("active");
    button.setAttribute("aria-expanded", !isActive);

    if (isActive) {
        answer.style.display = "none";
        button
            .querySelector("img")
            .setAttribute("src", "/assets/images/icon-plus.svg");
    } else {
        answer.style.display = "block";
        button
            .querySelector("img")
            .setAttribute("src", "/assets/images/icon-minus.svg");
    }
};
