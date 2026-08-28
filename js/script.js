const contentArea = document.getElementById("hero-content");
const navButtons = document.querySelectorAll(".main-nav button");

const sections = {
  about: `
    <h2>About Me</h2>

    <p>
      I am a motivated professional with a background in business management, logistics, and operations.
      I bring strong organisational, communication, problem-solving, and decision-making skills developed
      through practical professional experience.
    </p>

    <p>
      I am currently developing my skills in full-stack web development, working with HTML, CSS,
      JavaScript, Git, GitHub, the command line, and React. Through practical projects, I have gained
      experience in building responsive user interfaces, implementing interactive JavaScript functionality,
      managing projects with version control, and deploying web applications online.
    </p>

    <p>
      I enjoy solving problems, developing ideas from concept into working applications, and continuously
      expanding my technical knowledge. My goal is to combine my professional and business experience
      with software development skills to create practical, user-focused digital solutions and continue
      growing as a full-stack developer.
    </p>

    <ul class="about-highlights">
      <li>💼 Business Management, Logistics & Operations Background</li>
      <li>🌐 Full-Stack Web Development</li>
      <li>💻 HTML5, CSS3, JavaScript, Git, GitHub & React</li>
      <li>🛠️ Practical Project Development & Problem Solving</li>
      <li>🚀 Continuous Learning & Technical Growth</li>
    </ul>
  `,

  skills: `
    <div class="skills-section">

      <h2>Skills & Technologies</h2>

      <p class="skills-intro">
        Technologies and development tools I use while building and
        developing web projects.
      </p>

      <div class="skills-grid">

        <div class="skill-card">
          <div class="skill-icon">
            <i class="devicon-html5-plain colored"></i>
          </div>
          <h3>HTML5</h3>
          <p>Semantic markup and website structure</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">
            <i class="devicon-css3-plain colored"></i>
          </div>
          <h3>CSS3</h3>
          <p>Responsive layouts, Flexbox, Grid and animations</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">
            <i class="devicon-javascript-plain colored"></i>
          </div>
          <h3>JavaScript</h3>
          <p>DOM manipulation, events and interactive features</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">
            <i class="devicon-git-plain colored"></i>
          </div>
          <h3>Git</h3>
          <p>Version control and development workflow</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">
            <i class="devicon-github-original"></i>
          </div>
          <h3>GitHub</h3>
          <p>Repository management and project deployment</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">
            <i class="devicon-bash-plain"></i>
          </div>
          <h3>Command Line</h3>
          <p>File navigation and terminal-based development</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">
            <i class="devicon-react-original colored"></i>
          </div>
          <h3>React</h3>
          <p>JSX, components and interactive user interfaces</p>
        </div>

      </div>

    </div>
  `,

  contacts: `
    <div class="contacts-showcase">

      <div class="contacts-details">

        <div class="contacts-heading">
          <h2>Contacts</h2>

          <p>
            Feel free to connect with me through email, GitHub, or LinkedIn.
          </p>
        </div>

        <div class="contact-list">

          <a
            class="contact-card"
            href="mailto:butinyana2017@gmail.com"
          >
            <div class="contact-icon email-contact">
              ✉
            </div>

            <div class="contact-info">
              <span class="contact-label">Email</span>
              <strong>butinyana2017@gmail.com</strong>
            </div>
          </a>

          <a
            class="contact-card"
            href="https://github.com/Butiza-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="contact-icon">
              <i class="devicon-github-original"></i>
            </div>

            <div class="contact-info">
              <span class="contact-label">GitHub</span>
              <strong>github.com/Butiza-hub</strong>
            </div>
          </a>

          <a
            class="contact-card"
            href="https://www.linkedin.com/in/daniel-dipeere-958713175/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="contact-icon">
              <i class="devicon-linkedin-plain colored"></i>
            </div>

            <div class="contact-info">
              <span class="contact-label">LinkedIn</span>
              <strong>Daniel Dipeere</strong>
            </div>
          </a>

        </div>

      </div>

<div class="contacts-visual" id="contact-animation">

  <div class="network-display">

    <div class="network-core">
      <span>CONNECT</span>
    </div>

    <div class="network-line line-email"></div>
    <div class="network-line line-github"></div>
    <div class="network-line line-linkedin"></div>

    <div class="network-node email-node">
      <span>✉</span>
      <small>Email</small>
    </div>

    <div class="network-node github-node">
      <i class="devicon-github-original"></i>
      <small>GitHub</small>
    </div>

    <div class="network-node linkedin-node">
      <i class="devicon-linkedin-plain colored"></i>
      <small>LinkedIn</small>
    </div>

    <span class="signal-dot signal-email"></span>
    <span class="signal-dot signal-github"></span>
    <span class="signal-dot signal-linkedin"></span>

  </div>

  <h3>Professional Network</h3>

  <p>
    Connect through email, GitHub, or LinkedIn.
  </p>

  <div class="animation-hint">
    CLICK TO ACTIVATE NETWORK
  </div>

</div>
`,

  projects: `
    <div class="projects-showcase">

      <div class="projects-sidebar">

        <div class="projects-heading">
          <h2>Projects</h2>

          <p>
            A selection of practical web development projects demonstrating
            interface design, JavaScript functionality, and problem-solving.
          </p>
        </div>

        <div class="projects-list">

          <div class="project-link" data-project="inspiration26">
            <span class="project-number">01</span>

            <span>
              <strong>Inspiration-26</strong>
              <small>Interactive JavaScript Project</small>
            </span>
          </div>

          <div class="project-link" data-project="ssa">
            <span class="project-number">02</span>

            <span>
              <strong>Project 25 SSA</strong>
              <small>Security System Dashboard</small>
            </span>
          </div>

        </div>

      </div>

      <div class="projects-display">

        <div id="project-content" class="project-content-placeholder">

          <div class="project-tech-visual">
            <div class="tech-ring"></div>
            <div class="tech-core">&lt;/&gt;</div>
          </div>

          <h3>Project Showcase</h3>

          <p>
            Select a project to view its description and screenshots.
          </p>

          <div class="project-status">
            SYSTEM READY
          </div>

        </div>

      </div>

    </div>
  `
};

const addImageHint = () => {
  const oldHint = document.querySelector(".image-hint");

  if (oldHint) {
    oldHint.remove();
  }

  const hint = document.createElement("p");

  hint.className = "image-hint";
  hint.textContent =
    "Tip: Click image to enlarge, double-click for full view.";

  const container = document.querySelector(".project-images");

  if (container) {
    container.after(hint);
  }
};

const setupProjectImages = () => {
  const imgs = document.querySelectorAll(".project-screenshot");

  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  imgs.forEach((img) => {
    let timer = null;

    img.addEventListener("click", () => {
      timer = setTimeout(() => {

        imgs.forEach((otherImg) => {
          if (otherImg !== img) {
            otherImg.classList.remove("large");
          }
        });

        img.classList.toggle("large");

      }, 200);
    });

    img.addEventListener("dblclick", () => {
      clearTimeout(timer);

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

const showProject = (projectId) => {
  const projectContent = document.getElementById("project-content");

  let html = "";

  if (projectId === "inspiration26") {
    html = `
      <div class="project-details">

        <span class="project-type">
          INTERACTIVE WEB PROJECT
        </span>

        <h3>Inspiration-26</h3>

        <p>
          A dynamic inspirational message generator built to demonstrate
          JavaScript interaction, DOM manipulation, responsive design,
          and practical front-end development.
        </p>

        <div class="project-tech-stack">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>

        <div class="project-images">

          <img
            src="images/inspiration.png"
            class="project-screenshot"
            alt="Inspiration-26 project screenshot"
          >

        </div>

      </div>
    `;
  }

  if (projectId === "ssa") {
    html = `
      <div class="project-details">

        <span class="project-type">
          SECURITY SYSTEM SIMULATION
        </span>

        <h3>Project 25 – Security System Administrator</h3>

        <p>
          A front-end residential security system simulation featuring
          interactive security zones, system states, visual alerts,
          event logging, and responsive dashboard behaviour.
        </p>

        <div class="project-tech-stack">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>Local Storage</span>
          <span>GitHub Pages</span>
        </div>

        <div class="project-images">

          <img
            src="images/ssa/ssa1.png"
            class="project-screenshot"
            alt="SSA project dashboard screenshot"
          >

          <img
            src="images/ssa/ssa2.png"
            class="project-screenshot"
            alt="SSA project security zone screenshot"
          >

          <img
            src="images/ssa/ssa3.png"
            class="project-screenshot"
            alt="SSA project system status screenshot"
          >

        </div>

      </div>
    `;
  }

  projectContent.innerHTML = html;

  setupProjectImages();
};

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.getAttribute("data-section");

    contentArea.innerHTML = sections[section];

    navButtons.forEach((button) => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    if (section === "projects") {
      document.querySelectorAll(".project-link").forEach((link) => {
        link.addEventListener("click", () => {
          document.querySelectorAll(".project-link").forEach((projectLink) => {
            projectLink.classList.remove("active-project");
          });

          link.classList.add("active-project");

          showProject(link.dataset.project);
        });
      });
    }
  });
});

navButtons[0].classList.add("active");

contentArea.innerHTML = sections["about"];