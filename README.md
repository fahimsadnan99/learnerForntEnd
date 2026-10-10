# Trader Sadnan — trading course site

A React + Vite site for a Bengali trading course: Price Action, Master Class (OTC), Psychology and Money Management.

```bash
npm install
npm run dev      # development
npm run build    # production build into dist/
```

## Design

The look is a trader's chart book: graph-paper grid, ledger-style double rules, and two candle colours used the way candles use them — bull green and bear red. Amber marks a rule to apply. There is a dark theme (default) and a light "ledger paper" theme; the choice is remembered.

- **Type:** Newsreader (Latin) and Noto Serif Bengali for headings and reading, Hind Siliguri for interface text. All three are self-hosted through `@fontsource` packages, so no font requests leave the site.
- **Tokens:** every colour, font and size lives in `src/styles/base.css`. Change a value there and the whole site follows.

## Structure

```
src/
  styles/          base (tokens), layout, home, lessons, article, auth
  data/            otcLessons.js, priceActionLessons.js — titles, links, thumbnails
  component/
    Layout/        SiteHeader, SiteFooter, ThemeToggle
    Home/          hero with the drawn chart, course contents
    UniversalComponent/
      ArticleShell.jsx     reading page: back button, title, progress line, image zoom
      ComponentWrapper.jsx access check, then ArticleShell
      LessonIndex.jsx      numbered lesson list with search
      WarningText.jsx      the standing "filter the long timeframe first" rule
    OTC/, PriceAction/, Psychology/, Money/   lesson content
    User/          Login, Signup
```

### Adding a lesson

1. Create the lesson component and wrap it in `ComponentWrapper` with a `title`.
2. Add its route in `src/component/Route.jsx`.
3. Add an entry (`img`, `title`, `to`) to the matching file in `src/data/`. Its position in the list is its lesson number.

Lesson pages are styled automatically: `h5` is a section heading, `p` is body text, and images become framed plates that open larger on click. The old Bootstrap colour classes (`bg-warning`, `bg-danger`, `text-danger`) inside lessons are mapped onto the site palette.
