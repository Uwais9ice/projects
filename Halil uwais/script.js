// Toggle sidebar visibility
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('closeSidebar');

const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
};

sidebarToggle.addEventListener('click', toggleSidebar);
closeSidebar.addEventListener('click', toggleSidebar);

// Close sidebar when clicking outside of it
overlay.addEventListener('click', toggleSidebar);

// Wait for the DOM to fully load before adding more functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const imageItems = document.querySelectorAll('.image-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Show all images if "All" is clicked
            imageItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'flex'; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        });
    });

    // Slider functionality
    const slider = document.querySelector('.card-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalItems = document.querySelectorAll('.card-item').length;
    const visibleItems = 3;

    let currentIndex = 0;

    const updateSlider = () => {
        const translateXValue = -currentIndex * (100 / visibleItems);
        slider.style.transform = `translateX(${translateXValue}%)`;
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - visibleItems;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalItems - visibleItems) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Reference slider functionality
    const references = document.querySelectorAll('.reference-item');
    const dots = document.querySelectorAll('.dot');

    const showSlide = (index) => {
        references.forEach((reference, i) => {
            reference.style.display = (i === index) ? 'block' : 'none'; // Show current slide and hide others
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index); // Set active class for current dot
        });
    };

    const currentSlide = (index) => {
        currentIndex = (index - 1 + references.length) % references.length; // Cycle through slides
        showSlide(currentIndex);
    };

    // Initial call to display the first slide
    showSlide(currentIndex);

    // Add click event listeners to dots
    dots.forEach((dot) => {
        dot.addEventListener('click', function () {
            const slideIndex = parseInt(this.getAttribute('data-slide')) - 1; // Adjust for zero-based index
            showSlide(slideIndex);
        });
    });

    // Initialize the first slide as visible
    showSlide(0);
});

function hideLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = 'none'; // Hide the overlay
    }
}

$(document).ready(function(){
    $('.accordion-header').click(function(){
        $(this).next('.accordion-body').slideToggle();
        $('.accordion-body').not($(this).next()).slideUp();
    });
});

function sendMail(event) {
    event.preventDefault(); // Prevent default form submission

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    console.log("Params:", params); // Log params to verify

    const serviceID = "service_dlxaxig"; // Replace with your service ID
    const templateID = "template_v33tlfd"; // Replace with your template ID

    // Send email
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Clear the input fields after successful message send
            document.getElementById("contactForm").reset();
            
            console.log("EmailJS Response:", res); // Log the response
            showModal("Your message was sent successfully!", "success");
        })
        .catch((err) => {
            console.log("EmailJS Error:", err); // Log the error for debugging
            showModal("Failed to send the message. Please try again.", "error");
        });
}

function showModal(message, status) {
    const modalBody = document.querySelector("#messageModal .modal-body");

    // Update the modal content
    modalBody.innerHTML = `
        <h1>${status === "success" ? "Success!" : "Error!"}</h1>
        <p>${message}</p>
        <p>Thank you for reaching out to us. We will get back to you shortly.</p>
        <p>Best Regards,<br>Uwais Halil</p>
    `;

    // Reset modal content classes
    const modalContent = document.querySelector(".modal-content");
    modalContent.classList.remove("bg-success", "bg-danger"); // Remove previous classes
    
    // Add the appropriate class based on the status
    modalContent.classList.add(status === "success" ? "bg-success" : "bg-danger");

    // Show the modal using Bootstrap 5
    const modal = new bootstrap.Modal(document.getElementById('messageModal'));
    modal.show();
}
