# Smug.ie — the self-satisfaction edition

A single-page satirical news feed for GitHub Pages. No build step or dependencies.

## Put this version live

1. Unzip the download.
2. Open https://github.com/davidsweeney/Smug in your browser.
3. In the repository's main file list, select **Add file → Upload files**.
4. Drag in all four files from the unzipped folder: `index.html`, `smug-vintage.png`, `CNAME`, and `README.md`. Upload the files themselves to the top level, not the enclosing folder or ZIP.
5. Select **Commit changes**, committing to `main` if that is your Pages publishing branch.
6. Give GitHub Pages a few minutes to publish, then open https://smug.ie.

The image sits beside index.html, so there is no assets folder to upload. The previous styles and scripts are no longer loaded by this page. Older gallery and media files may stay in the repository; they are not linked from the new page.

Keep your existing GitHub Pages and GoDaddy DNS settings. The CNAME file still contains smug.ie. Enable Enforce HTTPS in GitHub Pages once available.

## Change the photo

The easiest option is to upload another PNG named `smug-vintage.png`, replacing this one. Alternatively, change the image's `src`, `width`, `height`, and descriptive `alt` text in index.html to match a new file.

## Change the writing or add a story

Open index.html on GitHub and click the pencil icon. All words, dates, and styling are in that file. Comments mark the latest story and earlier stories. Copy an earlier `<article class="dispatch">...</article>` block to add an entry, give its IDs unique names, and update its text and timestamp.

Dates are fixed publication dates, not a live clock. The articles and quotations are fictional satire. The supplied photograph is included unchanged.

You can preview the page locally by opening index.html after extracting all files.
