const $ = (id) => document.getElementById(id);

$("nav-name").textContent = cv.name;
$("hero-name").textContent = cv.name;
$("hero-tagline").textContent = cv.tagline;
$("hero-description").textContent = cv.description;
$("about-text").textContent = cv.about;
$("footer-name").textContent = `© ${new Date().getFullYear()} ${cv.name}`;
$("contact-text").textContent = cv.contactText;

const education = cv.education[0] || {};
$("terminal-name").textContent = cv.name;
$("terminal-education").textContent =
  [education.degree, education.institution].filter(Boolean).join(" · ");
$("terminal-focus").textContent = "software · algorithms · systems";

const allLinks = [
  ...cv.links,
  ...cv.profiles
];

$("hero-links").innerHTML = allLinks.map(link =>
  `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.shortLabel || link.label} ↗</a>`
).join("");

$("education-list").innerHTML = cv.education.map(item => `
  <article class="education-item">
    <div>
      <h3>${item.degree}</h3>
      <p>${item.institution}</p>
    </div>
    ${item.date ? `<div class="date">${item.date}</div>` : ""}
  </article>
`).join("");

if (cv.projects.length) {
  $("no-projects").style.display = "none";
  $("projects-list").innerHTML = cv.projects.map((project, index) => `
    <article class="project">
      <span class="project-number">PROJECT ${String(index + 1).padStart(2, "0")}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${project.url
        ? `<a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">View project →</a>`
        : ""}
    </article>
  `).join("");
}

if (cv.skills.length) {
  $("no-skills").style.display = "none";
  $("skills-list").innerHTML = cv.skills
    .map(skill => `<span class="skill">${skill}</span>`)
    .join("");
}

$("contact-links").innerHTML = allLinks.map(link =>
  `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`
).join("");

/* Theme */
const savedTheme = localStorage.getItem("cv-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

function updateThemeIcon() {
  $("theme-toggle").textContent =
    document.documentElement.dataset.theme === "light" ? "☀" : "☾";
}
updateThemeIcon();

$("theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  const next = current === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("cv-theme", next);
  updateThemeIcon();
});
