const path = require('path')

const hook = require('css-modules-require-hook')
const projectDir = path.resolve(__dirname)
console.log('projectDir: ', projectDir)
hook({
  generateScopedName: '[name]_[local]__[hash:base64:5]',
  rootDir: projectDir
})

// We need to register the hook above first since ES2015 imports occur 
// *before* statements are evaluated 
require('./server')
