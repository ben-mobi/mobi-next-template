# Next.js Mobi Template

This template incorporates various technologies used in Mobi projects.

## Features

- Framework: [Next.js](https://nextjs.org/)

  - Run the development server, e.g. `npm run dev`, then open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

- [Storybook](https://storybook.js.org/)
  - Run `npm run storybook` to start the Storybook server, then open [http://localhost:6006](http://localhost:6006) with your browser to view the components.
- Styling: [vanilla-extract](https://vanilla-extract.style/)
- UI Library: [Mantine](https://mantine.dev/getting-started/)
  - At some point the Mobi component library will be used instead, but for now, Mantine provides a quick, robust set of restyle-able components.
- API Calls: [Tanstack Query](https://tanstack.com/query/latest)

  - Also see the [Mobi API Reference](https://takemobiteam.github.io/master-api-docs/#/).

- State Management: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction).
- Icons: [phosphor-react](https://www.npmjs.com/package/phosphor-react)
- File generator: [Plop](https://plopjs.com/documentation/)
  - Run `npm run plop` to generate a new component. Comes with a custom prompt for creating files within modules.
- Git hooks: [Husky](https://typicode.github.io/husky/#/)
  - Basic setup for `pre-commit`, `pre-push`, `post-checkout`, and `post-merge` hooks.
