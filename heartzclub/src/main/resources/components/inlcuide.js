async function loadComponent(id, file) {

    const response = await fetch(file);

    const content = await response.text();

    document.getElementById(id).innerHTML = content;

    // SE FOR O HEADER
    if (id === "header") {

        // CARREGA SCRIPT HEADER
        const script = document.createElement("script");

        script.src =
            "/heartzclub/src/main/resources/components/header.js";

        script.defer = true;

        document.body.appendChild(script);
    }
}

// HEADER
loadComponent(
    "header",
    "/heartzclub/src/main/resources/components/header.html"
);

// FOOTER
loadComponent(
    "footer",
    "/heartzclub/src/main/resources/components/footer.html"
);