module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  "plugins": [
    ["module-resolver", {
      "root": ["./src/assets/js"],
      "alias": {
        "@js": "./src/assets/js"
      }
    }]
  ]
};
