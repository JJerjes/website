document.addEventListener("DOMContentLoaded", function() {
    // Modal logic
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("close");

    if (modal) {
        modal.showModal();

        if (closeButton) {
            closeButton.addEventListener("click", function() {
                modal.close();
            });
        }

        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.close();
            }
        });
    }

    const testimonials = [
        {
            name: "Erika Salazar",
            message: "Gracias a Fisio Carrillo pude recuperarme de una lesión deportiva en un tiempo récord. ¡recomendado!"
        },
        {
            name: "Fabio Yilizarbe",
            message: "El equipo de Fisio Carrillo me ayudó a mejorar mi movilidad y calidad de vida después de la cirugía de rodilla."
        },
        {
            name: "Mauricio Segura",
            message: "Sin duda los mejores centros de fisioterapia que he visitado. Su personal es siempre atento y muy amable con cada uno de los pacientes. Su experiencia hace que desde la primera consulta te den un buen diagnóstico y ayuden a controlar lesiones y dolencias."
        },
        {
            name: "Ricardo Chavez",
            message: "Un excelente servicio 100% profesional mantiene al deportista en óptimas condiciones y en constante rehabilitación a través de los mejores tratamientos y equipos de rehabilitación."
        }
    ];

    const testimonialContainer = document.querySelector('#testimonial-container');
    if (testimonialContainer) {
        testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.classList.add('testimonial');
            testimonialElement.innerHTML = `
                <p>"${testimonial.message}"</p>
                <p>- ${testimonial.name}</p>
            `;
            testimonialContainer.appendChild(testimonialElement);
        });
    }
});
