## My Personal Website
By Jacobtread

This is my personal website. It uses the [Next.js](https://nextjs.org/) framework.


## Projects
You can edit the list of projects by editing `pages/projects.tsx` here the projects
are listed as React Components you can create new ones by using the following 

```tsx
<Project
    title="Example Name"
    links={[createGitHubLink('jacobtread/some-repo')]}
    tags={['Example']}>
    This is an example project
</Project>
```

## Directory Structure

- components (React components)
- pages (The different pages for the website)
- public (Public assets for the website)
  - img (Images for the website)
- styles (SCSS Styling)
  - components (Component Specific styling)
- out (Output directory)


### Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

