document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------------------
    // 1. Dynamic Course Details Modal
    // ----------------------------------------------------
    const courseDetailsModal = document.getElementById('courseDetailsModal');
    if (courseDetailsModal) {
        courseDetailsModal.addEventListener('show.bs.modal', function(event) {
            // Button that triggered the modal
            const button = event.relatedTarget;
            
            // Extract info from data-bs-* attributes
            const title = button.getAttribute('data-course-title') || 'Course Details';
            const duration = button.getAttribute('data-course-duration') || 'N/A';
            const fee = button.getAttribute('data-course-fee') || 'N/A';
            const img = button.getAttribute('data-course-img') || 'https://via.placeholder.com/600x400';
            const description = button.getAttribute('data-course-description') || '';
            const syllabusList = button.getAttribute('data-course-syllabus') || '';
            const courseCode = button.getAttribute('data-course-code') || '';

            // Update the modal's content
            const modalTitle = courseDetailsModal.querySelector('.modal-title');
            const modalImg = courseDetailsModal.querySelector('.modal-course-img');
            const modalDuration = courseDetailsModal.querySelector('.modal-duration');
            const modalFee = courseDetailsModal.querySelector('.modal-fee');
            const modalDescription = courseDetailsModal.querySelector('.modal-description');
            const modalSyllabus = courseDetailsModal.querySelector('.modal-syllabus');
            const modalRegisterBtn = courseDetailsModal.querySelector('.modal-register-btn');

            if (modalTitle) modalTitle.textContent = title;
            if (modalImg) modalImg.src = img;
            if (modalDuration) modalDuration.textContent = duration;
            if (modalFee) modalFee.textContent = fee;
            if (modalDescription) modalDescription.textContent = description;

            // Generate Syllabus list items
            if (modalSyllabus && syllabusList) {
                const syllabusItems = syllabusList.split(',').map(item => item.trim());
                modalSyllabus.innerHTML = '';
                syllabusItems.forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item d-flex align-items-center bg-transparent border-0 px-0 py-1';
                    li.innerHTML = `<i class="bi bi-patch-check-fill text-success me-2"></i> ${item}`;
                    modalSyllabus.appendChild(li);
                });
            }

            // Update Register button URL with pre-select course parameter
            if (modalRegisterBtn && courseCode) {
                modalRegisterBtn.href = `register.html?course=${encodeURIComponent(courseCode)}`;
            }
        });
    }

    // ----------------------------------------------------
    // 2. Pre-select Course on Registration Page
    // ----------------------------------------------------
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        // Parse URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const courseParam = urlParams.get('course');
        
        if (courseParam) {
            const courseSelect = document.getElementById('courseSelection');
            if (courseSelect) {
                // Find matching option (value or case-insensitive text match)
                for (let i = 0; i < courseSelect.options.length; i++) {
                    const option = courseSelect.options[i];
                    if (option.value.toLowerCase() === courseParam.toLowerCase() || 
                        option.text.toLowerCase().includes(courseParam.toLowerCase())) {
                        courseSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        }

        // Form Submit Handler
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload

            // Basic Form Validation Check (if browser requirements met)
            if (!registrationForm.checkValidity()) {
                event.stopPropagation();
                registrationForm.classList.add('was-validated');
                return;
            }

            // Retrieve fields for display or confirmation
            const nameInput = document.getElementById('studentName');
            const courseSelect = document.getElementById('courseSelection');
            const studentName = nameInput ? nameInput.value : 'Student';
            const selectedCourse = courseSelect ? courseSelect.options[courseSelect.selectedIndex].text : 'Selected Course';

            // Find or create Alert Placeholder
            const alertPlaceholder = document.getElementById('alertPlaceholder');
            if (alertPlaceholder) {
                alertPlaceholder.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show shadow-sm border-0 bg-success text-white" role="alert">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-check-circle-fill fs-4 me-3"></i>
                            <div>
                                <h5 class="alert-heading mb-1 fw-bold">Registration Successful!</h5>
                                <p class="mb-0">Congratulations <strong>${studentName}</strong>, you have successfully registered for <strong>${selectedCourse}</strong>. We will contact you soon with the details.</p>
                            </div>
                        </div>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                // Scroll alert into view
                alertPlaceholder.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            // Reset Form and validation classes
            registrationForm.reset();
            registrationForm.classList.remove('was-validated');
        });
    }

    // ----------------------------------------------------
    // 3. Mock Login Form Handling
    // ----------------------------------------------------
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const emailInput = document.getElementById('loginEmail');
            const userEmail = emailInput ? emailInput.value : 'User';
            
            // Hide the modal
            const loginModalEl = document.getElementById('loginModal');
            const loginModal = bootstrap.Modal.getInstance(loginModalEl);
            if (loginModal) {
                loginModal.hide();
            }

            // Alert success
            alert(`Welcome back, ${userEmail}! Mock login was successful.`);
            
            // Reset form
            loginForm.reset();
        });
    }
});
