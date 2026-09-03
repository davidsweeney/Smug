# Smug starter site

A small three-page site designed for GitHub Pages. It includes a responsive home page, an expandable image area, and optional slots for a YouTube/Vimeo video and an audio file.

## Personalise it

Open `site-config.js` and replace the temporary values:

- `siteName`, `initials`, and `statement`
- `videoUrl`: paste a YouTube, Vimeo, or direct embed URL
- `audioSrc`: add an audio file to `assets/` and use a path such as `assets/my-track.mp3`

Replace the three WebP files in `assets/` with your own work while keeping the filenames, or update their paths and descriptions in the HTML pages. Update the project titles and descriptions in `index.html`, `gallery.html`, and `media.html`.

## Publish on GitHub Pages

1. Open [the Smug repository](https://github.com/davidsweeney/Smug) and go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
3. Wait for GitHub to show the public address and test all three pages.

## Connect a GoDaddy `.ie` domain

The included `CNAME` file sets the custom domain to `smug.ie`. For safety, confirm `smug.ie` appears in **GitHub Settings → Pages** before changing DNS in GoDaddy.

In GoDaddy **Domain Portfolio → your domain → DNS**, add four `A` records for the root domain:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Also add the recommended `www` record:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | www | `davidsweeney.github.io` |

Back in GitHub **Settings → Pages**, confirm `smug.ie` as the custom domain. Once the DNS check passes, turn on **Enforce HTTPS**. DNS changes can take time to propagate.

Current setup references:

- [GitHub Pages custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GoDaddy: add an A record](https://www.godaddy.com/help/add-an-a-record-19238)
- [GoDaddy: add a CNAME record](https://www.godaddy.com/help/add-a-cname-record-19236)

## Files

- `index.html` — home page
- `gallery.html` — images and lightbox
- `media.html` — video and audio page
- `site-config.js` — the main personal details and media links
- `styles.css` — layout, colour, typography, and responsive behaviour
- `script.js` — navigation, gallery, and media loading
- `assets/` — images, favicon, and future media files
