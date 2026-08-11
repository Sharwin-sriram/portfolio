export async function fetchGitHubRepos() {
  try {
    const res = await fetch("https://api.github.com/users/Sharwin-sriram/repos?per_page=100&sort=updated", {
      next: { revalidate: 3600 } // cache for 1 hour in Next.js
    });
    if (!res.ok) {
      throw new Error(`GitHub API returned status ${res.status}`);
    }
    const repos = await res.json();
    return repos.filter(repo => !repo.fork);
  } catch (err) {
    console.warn("Using fallback repo data due to API error or rate limit:", err);
    return fallbackRepos;
  }
}

export const fallbackRepos = [
  {
    id: 1245930136,
    name: "Pinesphere-POS-System",
    html_url: "https://github.com/Sharwin-sriram/Pinesphere-POS-System",
    description: "Enterprise Point-of-Sale Solution for inventory tracking and quick checkout.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["react", "pos-system", "typescript", "tailwind-css"],
    updated_at: "2026-06-06T03:59:19Z"
  },
  {
    id: 1239521913,
    name: "Internship-management-portal",
    html_url: "https://github.com/Sharwin-sriram/Internship-management-portal",
    description: "End-to-End Internship Workflow & Student Evaluation Platform.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["nextjs", "internship-management", "portal", "typescript"],
    updated_at: "2026-06-29T07:24:53Z"
  },
  {
    id: 1329644478,
    name: "media-server",
    html_url: "https://github.com/Sharwin-sriram/media-server",
    description: "Lightweight media streaming node for audio/video stream chunking.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["node", "media-server", "streaming", "typescript"],
    updated_at: "2026-08-11T04:22:38Z"
  },
  {
    id: 1296046484,
    name: "LLD",
    html_url: "https://github.com/Sharwin-sriram/LLD",
    description: "Low Level System Design and Design Pattern catalog in Java.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["java", "lld", "design-patterns", "solid-principles"],
    updated_at: "2026-07-10T04:28:34Z"
  },
  {
    id: 1266968312,
    name: "Hyprland-rice",
    html_url: "https://github.com/Sharwin-sriram/Hyprland-rice",
    description: "Custom Hyprland Wayland compositor dotfiles & system theme configuration.",
    language: "CSS",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["hyprland", "linux", "dotfiles", "wayland"],
    updated_at: "2026-07-30T10:12:23Z"
  },
  {
    id: 1138090020,
    name: "Form-validation",
    html_url: "https://github.com/Sharwin-sriram/Form-validation",
    description: "Dynamic client-side form validation suite built with vanilla JS and regex.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["javascript", "form-validation", "html5"],
    updated_at: "2026-03-05T08:48:07Z"
  }
];
