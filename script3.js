document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".clickable-image");

    images.forEach(image => {
        const altTextContainer = document.createElement("div");
        altTextContainer.classList.add("alt-text");
        image.parentElement.appendChild(altTextContainer);

        image.addEventListener("click", function() {
            const altText = image.alt;
            altTextContainer.textContent = altText;
            altTextContainer.style.display = "block";
        });

        document.addEventListener("click", function(event) {
            if (!image.contains(event.target) && !altTextContainer.contains(event.target)) {
                altTextContainer.style.display = "none";
            }
        });
    });
});
