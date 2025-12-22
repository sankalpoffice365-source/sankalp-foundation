# Sankalp Inclusive Foundation Website

## Overview
Sankalp Inclusive Foundation is a 501(c)(3) nonprofit organization committed to creating meaningful impact through compassionate programs. Currently operating Sankalp Learning Center for neurodiverse children, with plans to expand to serve other communities in need.

## Deployment

### Cloudflare Pages
```bash
npx wrangler deploy
```

### Netlify
Drag and drop the folder or use the Netlify CLI.

## Custom Domain
- **Foundation Site:** `sankalpinclusive.org`
- **Learning Center Site:** `sankalplearning.org` (separate project)

## Structure
- `index.html` - Homepage
- `mission.html` - Mission & Vision
- `initiatives.html` - Foundation programs
- `governance.html` - Governance & legal docs
- `about.html` - About the foundation
- `donate.html` - Donation page
- `contact.html` - Contact form
- `assets/` - CSS, JS, images, media
- `docs/` - Legal documents (501(c)(3) letter, bylaws)

## Interlinking
- Foundation site links to Learning Center: `https://sankalplearning.org`
- Learning Center footer links to Foundation: `https://sankalpinclusive.org`

