import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Atharva Paranjpe",
  DESCRIPTION: "Software engineer at AWS building the access controls and infrastructure behind AI agents on Amazon Connect.",
  AUTHOR: "Atharva Paranjpe",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Where I've worked and what I built there.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on distributed systems, access control and AI agents.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Case studies from AWS, plus research from Rutgers.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Resume",
    HREF: "/resume.pdf",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "atharva.paranjpe@gmail.com",
    HREF: "mailto:atharva.paranjpe@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "AtharvaParanjpe",
    HREF: "https://github.com/AtharvaParanjpe"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "atharva-paranjpe",
    HREF: "https://www.linkedin.com/in/atharva-paranjpe/",
  },
]
