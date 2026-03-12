// HERO CONTENT SWAP WITH ACTIVE BUTTON
const contentArea = document.getElementById("hero-content");
const navButtons = document.querySelectorAll(".main-nav button");

const sections = {
  about: `<p>I am a motivated professional with experience in business management, logistics, and operations. 
          I am currently expanding my skills in web development and building practical projects using HTML, CSS, JavaScript, Git, and GitHub.</p>`,

  projects: `<ul>
                <li>Project 25 – Security System Administrator: Front-end simulation of a residential security system dashboard.</li>
                <li>Inspiration-26: Personal project demonstrating HTML, CSS, JS, Git, and GitHub skills.</li>
             </ul>`,

  skills: `<ul>
             <li>HTML</li>
             <li>CSS</li>
             <li>JavaScript</li>
             <li>Git</li>
             <li>GitHub</li>
             <li>Command Line</li>
           </ul>`,

  contacts: `<p>Email: <a href="mailto:butinyana2017@gmail.com">butinyana2017@gmail.com</a></p>
             <p>GitHub: <a href="https://github.com/Butiza-hub" target="_blank">github.com/Butiza-hub</a></p>
             <p>LinkedIn: Coming soon</p>`
};

// Add click events to nav buttons
navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.getAttribute("data-section");

        // 1️⃣ Update content
        contentArea.innerHTML = sections[section];

        // 2️⃣ Remove 'active' from all buttons
        navButtons.forEach(b => b.classList.remove("active"));

        // 3️⃣ Add 'active' to the clicked button
        btn.classList.add("active");
    });
});

// Optional: set initial active button (About Me)
navButtons[0].classList.add("active");
contentArea.innerHTML = sections["about"];