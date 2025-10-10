# Louise Pillon Photography

This is the photography portfolio website for **Louise Pillon**, a photographer based in Sydney, Australia, specializing in maternity, newborn, and family photography.

Built with [Astro](https://astro.build) using the Horizon theme from [Cosmic Themes](https://cosmicthemes.com/).

## Quickstart

1. Clone this repository to your local machine
2. Install all necessary packages with `npm install`
3. Run `npm run dev` to start the dev server
4. The site will be available at `localhost:4321`
5. Update the site URL in `astro.config.mjs` and `/public/robots.txt` to match your domain before deployment

## Project Structure

The source files have the following setup:

```
.
├── public/
│   ├── favicons/
│   │   └── favicon.ico
│   ├── images/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── louise/
│   ├── components/
│   │   ├── Hero/
│   │   ├── Portfolio/
│   │   ├── Testimonials/
│   │   └── ... (other components)
│   ├── config/
│   │   ├── navData.json.ts
│   │   └── siteData.json.ts
│   ├── data/
│   │   ├── portfolios/         # Portfolio galleries
│   │   ├── testimonials/       # Client testimonials
│   │   └── otherPages/         # Additional pages
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PortfolioLayout.astro
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── portfolio/          # Portfolio pages
│   │   ├── [page].astro        # Dynamic pages
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── netlify.toml
├── package.json
└── tsconfig.json
```

## Content Management

- **Portfolio Galleries**: Add new galleries in `src/data/portfolios/`. Each gallery should have its own folder with an `index.md` file and images.
- **Testimonials**: Add testimonials in `src/data/testimonials/` with an `index.md` file and optional images.
- **Site Configuration**: Update site metadata in `src/config/siteData.json.ts`
- **Navigation**: Modify navigation menu in `src/config/navData.json.ts`

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run format`          | Format code with ESLint and Prettier             |
| `npm run lint`            | Run ESLint to check for code issues              |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment

This site is configured for deployment on Netlify (see `netlify.toml`), but can be deployed to any platform that supports Astro, including Vercel, Cloudflare Pages, or other hosting providers.

## Technologies Used

- **Framework**: Astro 5.7
- **Styling**: Tailwind CSS 4.1
- **Content**: MDX for content management
- **Icons**: Astro Icon with Iconify
- **SEO**: astro-seo
- **Fonts**: Fontsource (Playfair Display, Raleway, Work Sans, Cinzel Decorative)

## License

This project is open source and available under the [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).

However, if you have purchased [All Access](https://cosmicthemes.com/all-access/) from Cosmic Themes, there is a no attribution required license you can view at [License details](https://cosmicthemes.com/license/).

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Cosmic Themes Documentation](https://cosmicthemes.com/docs/)
