document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        },
        {
            threshold: 0.10
        }
    );

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });


    const topButton =
        document.getElementById("topButton");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }

    });


    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});