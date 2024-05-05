const gulp = require("gulp");

//gh-pages
const ghPages = require("gh-pages");
const path = require("path");

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), "./build"), cb);
}
exports.deploy = deploy;

// Tasks
require("./gulp/dev.js");
require("./gulp/docs.js");
require("./gulp/fontsDev.js");
require("./gulp/fontsDocs.js");

gulp.task(
  "default",
  gulp.series(
    "clean:dev",
    "fontsDev",
    gulp.parallel(
      "html:dev",
      "sass:dev",
      "images:dev",
      gulp.series("svgStack:dev", "svgSymbol:dev"),
      "files:dev",
      "js:dev"
    ),
    gulp.parallel("server:dev", "watch:dev")
  )
);

gulp.task(
  "docs",
  gulp.series(
    "clean:docs",
    "fontsDocs",
    gulp.parallel(
      "html:docs",
      "sass:docs",
      "images:docs",
      gulp.series("svgStack:docs", "svgSymbol:docs"),
      "files:docs",
      "js:docs"
    ),
    gulp.parallel("server:docs")
  )
);
