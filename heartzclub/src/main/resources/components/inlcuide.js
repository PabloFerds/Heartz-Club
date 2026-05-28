async function loadComponent(id, file) {

    const response = await fetch(file);

    const content = await response.text();

    document.getElementById(id).innerHTML = content;

    if (id === "header") {

        setTimeout(() => {

            const oldScript =
            document.getElementById("header-script");

            if (oldScript) {
                oldScript.remove();
            }

            const script =
            document.createElement("script");

            script.id = "header-script";

            script.src =
            "/heartzclub/src/main/resources/components/headerScript.js";

            document.body.appendChild(script);

        }, 100);

    }

}

async function carregarComponentes() {

    await loadComponent(
        "header",
        "/heartzclub/src/main/resources/components/header.html"
    );

    await loadComponent(
        "footer",
        "/heartzclub/src/main/resources/components/footer.html"
    );

}

carregarComponentes();