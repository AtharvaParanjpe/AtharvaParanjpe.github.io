# atharvaparanjpe.github.io

Personal site of Atharva Paranjpe, software engineer at AWS.

Built with [Astro](https://astro.build) on the [Astro Sphere](https://github.com/markhorn-dev/astro-sphere) template (MIT), and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Editing content

- Work history: `src/content/work/*.md`
- Projects and case studies: `src/content/projects/<slug>/index.md`. Set `featured: true` and a `rank` to show a project in the Featured section and on the home page.
- Site name, nav links and socials: `src/consts.ts`
- Resume: `public/resume.pdf`

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check and build to dist/
```
