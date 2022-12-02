
// accordion

const Accordion = document.querySelectorAll(".accordion-btn");

Accordion.forEach(item => {
    item.addEventListener("click", handleClick)
});

function handleClick(e) {
    const CurrentElement = e.currentTarget;
    const parentNode = CurrentElement.parentNode;

    Accordion.forEach(item => {
        item.parentNode.classList.remove("accordion-active");
    });

    parentNode.classList.add("accordion-active");
}