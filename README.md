# Personal portfolio starter

A three-page static portfolio designed for GitHub Pages. It includes a responsive home page, an expandable image gallery, and slots for a YouTube/Vimeo video and an audio file.

## Personalise it

Open `site-config.js` and replace the temporary values:

- `name`, `initials`, `role`, `statement`, and `location`
- `videoUrl`: paste a YouTube, Vimeo, or direct embed URL
- `audioSrc`: add an audio file to `assets/` and use a path such as `assets/my-track.mp3`

Replace the three WebP files in `assets/` with your own work while keeping the filenames, or update their paths and descriptions in the HTML pages. Update the project titles and descriptions in `index.html`, `gallery.html`, and `media.html`.

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `portfolio`.
2. Upload everything in this folder to the root of the repository and commit the files.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub to show the public `github.io` address and test all three pages.

## Connect a GoDaddy `.ie` domain

For safety, add the custom domain in **GitHub Settings → Pages** before changing DNS in GoDaddy. Replace the examples below with your real domain and GitHub username.

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
| CNAME | www | `YOUR-USERNAME.github.io` |

Back in GitHub **Settings → Pages**, enter `YOURDOMAIN.ie` as the custom domain. Once the DNS check passes, turn on **Enforce HTTPS**. DNS changes can take time to propagate.

Current setup references:

- [GitHub Pages custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GoDaddy: add an A record](https://www.godaddy.com/help/add-an-a-record-19238)
- [GoDaddy: add a CNAME record](https://www.godaddy.com/help/add-a-cname-record-19236)

## Files

- `index.html` — home page
- `gallery.html` — image gallery and lightbox
- `media.html` — video and audio page
- `site-config.js` — the main personal details and media links
- `styles.css` — layout, colour, typography, and responsive behaviour
- `script.js` — navigation, gallery, and media loading
- `assets/` — images, favicon, and future media files
