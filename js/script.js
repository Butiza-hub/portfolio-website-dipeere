const contentArea = document.getElementById("hero-content");
const navButtons = document.querySelectorAll(".main-nav button");

const sections = {
  about: `
  <h2>About Me</h2>

  <p>
    I am a motivated professional with experience in business management, logistics, and operations.
    I bring strong organizational skills, problem-solving ability, and a results-driven mindset into everything I do.
  </p>

  <p>
    Recently, I have been expanding my skills in web development, building practical projects using
    HTML, CSS, JavaScript, Git, and GitHub.
  </p>

  <p>
    My goal is to combine my professional experience with technical knowledge to build user-friendly,
    well-designed web solutions.
  </p>

  <ul class="about-highlights">
    <li>💼 Business & Operations Background</li>
    <li>🌐 Full-Stack Development (HTML, CSS, JavaScript, Git)</li>
    <li>🚀 Passion for Learning & Growth</li>
    <li>🧠 Strong Problem-Solving Mindset</li>
  </ul>
`,

  skills: `<ul>
    <li>HTML5 – semantic markup and structure</li>
    <li>CSS3 – responsive layouts, Flexbox, Grid, animations</li>
    <li>JavaScript – DOM manipulation, event handling, interactive features</li>
    <li>Git & GitHub – version control, project management</li>
  </ul>`,

  contacts: `<p>Email: <a href="mailto:butinyana2017@gmail.com">butinyana2017@gmail.com</a></p>
             <p>GitHub: <a href="https://github.com/Butiza-hub" target="_blank">github.com/Butiza-hub</a></p>`,

  projects: `
  <div class="projects-list">
    <div class="project-link" data-project="inspiration26">Project 1 – Inspiration-26</div>
    <div class="project-link" data-project="ssa">Project 2 – Project 25 SSA</div>
  </div>
  <div id="project-content"></div>
  `
};

const addImageHint = () => {
    const oldHint = document.querySelector(".image-hint");
    if (oldHint) oldHint.remove();

    const hint = document.createElement("p");
    hint.className = "image-hint";
    hint.textContent = "Tip: Click image to enlarge, double-click for full view.";

    const container = document.querySelector(".project-images");
    if (container) container.after(hint);
};

const setupProjectImages = () => {
    const imgs = document.querySelectorAll(".project-screenshot");
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    imgs.forEach(img => {
        let timer = null;

        img.addEventListener("click", () => {
            timer = setTimeout(() => {
                img.classList.toggle("large");
            }, 200);
        });

        img.addEventListener("dblclick", () => {
            clearTimeout(timer);
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn.onclick = () => lightbox.style.display = "none";

    lightbox.onclick = (e) => {
        if (e.target === lightbox) lightbox.style.display = "none";
    };

    addImageHint();
};

const showProject = (projectId) => {
    const projectContent = document.getElementById("project-content");
    let html = "";

    if (projectId === "inspiration26") {
        html = `
        <p class="project-inspiration26"><strong>Inspiration-26:</strong> Dynamic web project.</p>
        <div class="project-images">
            <img src="images/inspiration.png" class="project-screenshot">
        </div>`;
    }

    if (projectId === "ssa") {
        html = `
        <p class="project-ssa"><strong>Project 25 – SSA:</strong> Security system dashboard.</p>
        <div class="project-images">
            <img src="images/ssa/ssa1.png" class="project-screenshot">
            <img src="images/ssa/ssa2.png" class="project-screenshot">
            <img src="images/ssa/ssa3.png" class="project-screenshot">
        </div>`;
    }

    projectContent.innerHTML = html;
    setupProjectImages();
};

navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.getAttribute("data-section");
        contentArea.innerHTML = sections[section];

        navButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (section === "projects") {
            document.querySelectorAll(".project-link").forEach(link => {
                link.addEventListener("click", () => {
                    document.querySelectorAll(".project-link").forEach(l => l.classList.remove("active-project"));
                    link.classList.add("active-project");
                    showProject(link.dataset.project);
                });
            });
        }
    });
});

navButtons[0].classList.add("active");
contentArea.innerHTML = sections["about"];