module.exports = {
  plugins:[
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-nested"),
  ],
  "browserslist": [
    "last 3 versions"
 ]
}
