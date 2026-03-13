// HERO CONTENT SWAP WITH ACTIVE BUTTON
const contentArea = document.getElementById("hero-content");
const navButtons = document.querySelectorAll(".main-nav button");

const sections = {
  about: `<p>I am a motivated professional with experience in business management, logistics, and operations. Recently, I have been expanding my skills in web development, creating practical projects using HTML, CSS, JavaScript, Git, and GitHub. I enjoy turning ideas into interactive web applications, learning new technologies, and continuously improving my coding and problem-solving skills. My goal is to combine my professional experience with technical knowledge to build user-friendly, well-designed web solutions.</p>`,

  projects: `<ul>
    <li class="project-ssa">
        <strong>Project 25 – Security System Administrator (SSA):</strong>  
        A front-end simulation of a residential security system dashboard.  
        Features include real-time system status indicators, arming/disarming functionality, exit delay countdowns, and zone monitoring.
    </li>
    <br>
    <li class="project-inspiration26">
        <strong>Inspiration-26:</strong>  
        A personal web development project showcasing skills in HTML, CSS, JavaScript, Git, and GitHub.  
        Features a modern, responsive layout with a dynamic hero section, smooth navigation, and interactive project cards.
    </li>
  </ul>`,

  skills: `<ul>
    <li>HTML5 – semantic markup and structure</li>
    <li>CSS3 – responsive layouts, Flexbox, Grid, animations</li>
    <li>JavaScript – DOM manipulation, event handling, interactive features</li>
    <li>Git & GitHub – version control, project management, collaborative workflow</li>
    <li>Additional tools – VS Code, Chrome DevTools, terminal commands</li>
  </ul>`,

  contacts: `<p>Email: <a href="mailto:butinyana2017@gmail.com">butinyana2017@gmail.com</a></p>
             <p>GitHub: <a href="https://github.com/Butiza-hub" target="_blank">github.com/Butiza-hub</a></p>
             <p>LinkedIn: Coming soon</p>`
};

// Add click events to nav buttons
navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.getAttribute("data-section");

        // 1️⃣ Update hero content
        contentArea.innerHTML = sections[section];

        // 2️⃣ Remove 'active' from all buttons
        navButtons.forEach(b => b.classList.remove("active"));

        // 3️⃣ Add 'active' to the clicked button
        btn.classList.add("active");
    });
});

// Set initial active button (About Me)
navButtons[0].classList.add("active");
contentArea.innerHTML = sections["about"];