# Harrison Township website

A responsive, buildless website for Harrison Township, **Preble County, Ohio**. Open `index.html` in a browser to view it. All content is ordinary HTML; no subscriptions, framework, package installation, or database are required.

## Edit the website

- **Text, phone numbers, links, and sections:** edit `index.html` in a text editor or GitHub's file editor. HTML comments mark common editing areas.
- **Colors, fonts, spacing, and mobile layouts:** edit `assets/styles.css`. Main colors are defined at the beginning under `:root`.
- **Mobile menu:** `assets/site.js`. Content remains available when JavaScript is disabled.
- **PDFs:** place public files in `documents/`, then add links such as `<a href="documents/2026-11-minutes.pdf">November 2026 meeting minutes (PDF)</a>`. Use descriptive labels and accessible PDFs.
- **Illustration:** the decorative SVG in `index.html` is original generic artwork, not a depiction of an actual township building or an official seal. Replace it with a township-owned photograph if preferred.

To add a dated notice, insert an `<article>` with a heading, `<time datetime="2026-11-02">November 2, 2026</time>`, and the notice text in the meetings section. Only post confirmed notices. Replace the links to the old Google Sites archives as documents are migrated.

## Host on GitHub Pages

1. Create a GitHub repository (for example, `harrison-township`). A public repository can use GitHub Pages on GitHub Free.
2. Upload **only the contents of this `township-website` folder** into the repository root. `index.html` should be at the top level, alongside `assets`, `documents`, and `.nojekyll`. Do not upload the parent workspace or its client profile.
3. In the repository, choose **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select **main** and **/(root)**, then save. GitHub displays the published URL after deployment (typically `https://YOUR-USERNAME.github.io/harrison-township/`). Allow up to 10 minutes.
6. Edit and commit files on GitHub to publish future updates. No build command is needed.

Official instructions: https://docs.github.com/en/pages/quickstart

The site uses relative asset links, so it works both under a repository URL and on a custom domain. Once the preview is approved, configure your own domain through GitHub Pages settings and your DNS provider. No domain changes have been made by this project.

## Content review before launch

This is a redesign draft using public information reviewed November 2, 2026. It has not been published. Check office hours, mailing address, phone number, holiday observances, and linked documents before making it the public township website.

The old homepage labels its officials as of 2024 and includes expired terms. This design links to the administration page instead of presenting those names as a verified current roster. Its recurring meeting schedule is also not asserted as current; the design directs residents to announcements or the office. Confirm leadership, the meeting schedule, and the physical office address to add them directly.

Existing minutes, calendar, notices, and administration remain on Google Sites; this is not a migration of every embedded Drive file or historical page. Keep the original site available while migrating those resources. No dates or public notices have been invented. The contact links initiate a telephone call; there is no form backend.

Public source pages:
- https://sites.google.com/site/harrisontwppc/home
- https://sites.google.com/site/harrisontwppc/about-the-township/administration
- https://sites.google.com/site/harrisontwppc/pricesservices-cemetery-rules-regulations/meeting-minutes
- https://sites.google.com/site/harrisontwppc/about-the-township/history-of-the-township-cemeteries

Accessibility features include semantic landmarks, a skip link, keyboard focus styling, a labeled mobile menu, reduced-motion support, and responsive layouts. These features do not constitute an accessibility certification.

## News & Updates and Facebook

The News & Updates section in `index.html` contains editable articles. Copy the commented article template inside `news-list`, replace its date, title, text, and optional PDF link, and remove the comment markers. No sample announcements are shown as real news.

The adjacent Facebook timeline uses Meta's hosted Page Plugin, pointing to the Facebook page linked from the existing township website: https://www.facebook.com/Harrison-TWP-of-Preble-Co-1675336126057593/ . New public posts are supplied by Facebook; no API key or build step is required. The site does not copy Facebook posts into its own news articles.

Facebook controls whether its feed displays and may require login or restrict embeds depending on the page's settings and visitor browser. A permanent direct link remains available. Verify the live timeline after publishing on GitHub Pages; a local file preview may behave differently. Embedded post retrieval has not been independently confirmed. If the township changes its Facebook address, update both direct links and the encoded `href` parameter in the iframe URL. Do not place access tokens in this public website.
