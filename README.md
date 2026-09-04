# Keith LeMontang — Analytics Portfolio

A static one-page portfolio built for GitHub Pages.

## Included

- Responsive portfolio site
- Live interactive Looker Studio embed
- Power BI Executive Performance screenshot
- Power BI Sales Performance screenshot
- Power BI interactive walkthrough video
- About, services, experience, tools, and contact sections
- Mobile navigation and lightweight scroll animations
- No build step or framework required

## Publish with GitHub Pages

1. Create a new GitHub repository (for example, `keith-analytics-portfolio`).
2. Upload **the contents of this folder** to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide the public Pages URL once deployment finishes.

## Custom domain later

When you purchase a domain, add it in **Settings → Pages → Custom domain**. GitHub will tell you which DNS records to add at your domain registrar. You can then add a `CNAME` file to this repository if needed.

## Power BI live embed later

The Power BI project currently uses two screenshots and a video walkthrough. When a public Power BI embed is available, add the iframe in the Power BI project section of `index.html`. The rest of the layout can remain unchanged.

## Update contact information

The current contact button uses:

`Keith.LeMontang@gmail.com`

Edit the `mailto:` links in `index.html` if you want to use another address. Phone and LinkedIn are intentionally omitted until you choose to publish them.

## Files

- `index.html` — page structure and copy
- `styles.css` — layout and visual design
- `script.js` — mobile navigation and reveal effects
- `assets/` — dashboard imagery, video, and favicon
