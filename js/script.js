// HERO CONTENT SWAP WITH ACTIVE BUTTON
const contentArea = document.getElementById("hero-content");
const navButtons = document.querySelectorAll(".main-nav button");

// Sections content
const sections = {
  about: `<p>I am a motivated professional with experience in business management, logistics, and operations. Recently, I have been expanding my skills in web development, creating practical projects using HTML, CSS, JavaScript, Git, and GitHub. I enjoy turning ideas into interactive web applications, learning new technologies, and continuously improving my coding and problem-solving skills. My goal is to combine my professional experience with technical knowledge to build user-friendly, well-designed web solutions.</p>`,

  skills: `<ul>
    <li>HTML5 – semantic markup and structure</li>
    <li>CSS3 – responsive layouts, Flexbox, Grid, animations</li>
    <li>JavaScript – DOM manipulation, event handling, interactive features</li>
    <li>Git & GitHub – version control, project management, collaborative workflow</li>
    <li>Additional tools – VS Code, Chrome DevTools, terminal commands</li>
  </ul>`,

  contacts: `<p>Email: <a href="mailto:butinyana2017@gmail.com">butinyana2017@gmail.com</a></p>
             <p>GitHub: <a href="https://github.com/Butiza-hub" target="_blank">github.com/Butiza-hub</a></p>
             <p>LinkedIn: Coming soon</p>`,

  projects: `
  <div class="projects-list">
    <div class="project-link" data-project="inspiration26">Project 1 – Inspiration-26</div>
    <div class="project-link" data-project="ssa">Project 2 – Project 25 SSA</div>
  </div>
  <div id="project-content"></div>
  `
};

// Function to add image hint
const addImageHint = () => {
    const oldHint = document.querySelector(".image-hint");
    if (oldHint) oldHint.remove();

    const hint = document.createElement("p");
    hint.className = "image-hint";
    hint.textContent = "Tip: Click an image to enlarge. Double-click to open full-screen.";

    const imagesContainer = document.querySelector(".project-images");
    if (imagesContainer) imagesContainer.after(hint);
};

// Function to setup project images (click to enlarge, double-click for full-screen)
const setupProjectImages = () => {

    const imgs = document.querySelectorAll(".project-screenshot");
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    imgs.forEach(img => {

        let clickTimer = null;

        img.addEventListener("click", () => {
            clickTimer = setTimeout(() => {
                img.classList.toggle("large");
            }, 200);
        });

        img.addEventListener("dblclick", () => {
            clearTimeout(clickTimer);
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });

    });

    closeBtn.onclick = () => {
        lightbox.style.display = "none";
    };

    lightbox.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    };

    addImageHint();
};

// Function to show project details
const showProject = (projectId) => {
    const projectContent = document.getElementById("project-content");
    let html = "";

    if (projectId === "inspiration26") {
        html = `
        <p class="project-inspiration"><strong>Inspiration-26:</strong> Personal web development project demonstrating HTML, CSS, JS, Git, and GitHub skills. Features a dynamic hero section, interactive cards, and responsive design.</p>
        <div class="project-images">
            <img src="Images/Inspiration26.png" class="project-screenshot" alt="Inspiration Screenshot">
        </div>`;
    } else if (projectId === "ssa") {
        html = `
        <p class="project-ssa"><strong>Project 25 – SSA:</strong> Front-end simulation of a residential security system dashboard with arming/disarming, exit delay, and zone monitoring.</p>
        <div class="project-images">
            <img src="Images/ssa/ssa1.png" class="project-screenshot" alt="SSA Screenshot 1">
            <img src="Images/ssa/ssa2.png" class="project-screenshot" alt="SSA Screenshot 2">
            <img src="Images/ssa/ssa3.png" class="project-screenshot" alt="SSA Screenshot 3">
        </div>`;
    }

    projectContent.innerHTML = html;
    setupProjectImages();
};

// Handle nav buttons click
navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.getAttribute("data-section");
        contentArea.innerHTML = sections[section];

        navButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (section === "projects") {
            const projectLinks = document.querySelectorAll(".project-link");
            projectLinks.forEach(link => {
                link.addEventListener("click", () => {
                    projectLinks.forEach(l => l.classList.remove("active-project"));
                    link.classList.add("active-project");
                    showProject(link.getAttribute("data-project"));
                });
            });
        }
    });
});

// Initial page load
navButtons[0].classList.add("active");
contentArea.innerHTML = sections["about"];