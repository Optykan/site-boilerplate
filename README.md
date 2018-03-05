# site-boilerplate
React (***new!***) + Foundation6 + Sass + Gulp.js + Browserify + Express.js + Babel for easy site setup and less pain in the future. 

React is included by default now, if you do not wish to include it simply remove all references to the react folder. Remove the `react` task and the corresponding `gulp.watch` in the `server` task. Then remove the folders `/assets/react` and `public/javascripts/react`. Also don't forget to remove the script reference to `app.js` in `views/partials/footer.ejs`.


# Setup

Clone the repo, rename it, then `npm install`. `npm run` to start the server. If it doesn't open automatically in your browser visit `http://localhost:3001` for livereload, `http://localhost:3000` if that doesn't work.

# Styles

Simply include the `header.ejs` file in `/views/partials`. Note that `style.css` is included on every page.

If you wish to include a page-specific style, simply add `/path/to/file.css` in the `stylesheets` array before you include `header`.

If you do not wish to include any page-specific styles, you do not need a `var stylesheets` declaration.

# Scripts

Scripts are loaded by default at the end of the body. Note that `app.js` (the react file), as well as `scripts.js` (other generic scripts) are included on every page.

Similar to styles, to include a page-specfic script, add `/path/to/file.js` in the `scripts` array before you include `footer`.

If you do not wish to include any page-specific scripts, you do not need a `var scripts` declaration.