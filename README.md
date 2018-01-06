# site-boilerplate
Foundation6 + Sass + Gulp.js + Browserify + Express.js + Babel for easy site setup and less pain in the future. maybe consider setting up React or something later


# Setup

Clone the repo, rename it, then `npm install`. `npm run` to start the server

# Styles

Simply include the `header.ejs` file in `/views/partials`. Note that `style.css` is included on every page.

If you wish to include a page-specific style, simply add `/path/to/file.css` in the `stylesheets` array before you include `header`.

If you do not wish to include any page-specific styles, you do not need a `var stylesheets` declaration.

# Scripts

Scripts are loaded by default at the end of the body. Note that `app.js` is included on every page.

Similar to styles, to include a page-specfic script, add `/path/to/file.js` in the `scripts` array before you include `footer`.

If you do not wish to include any page-specific scripts, you do not need a `var scripts` declaration.