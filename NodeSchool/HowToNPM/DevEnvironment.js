
exports.problem = function () { 
}.toString().split('\n').slice(1,-1).join('\n')

var shop = require('../')
var fs = require('fs')
var path = require('path')

exports.verify = function (args, cb) {
  var datadir = shop.datadir
  var cwd = process.cwd()
  if (path.resolve(cwd, 'problems', path.basename(__filename)) === path.resolve(__filename)) {
    console.log('It looks like you are in the root of the workshopper\n' +
                'That is not wise.  Please make a new dir, and use that.')
    return cb(false)
  }

  if (cwd === process.env.HOME || cwd === process.env.USERPROFILE) {
    console.log('It looks like you are in your home directory.\n' +
                'That is not wise.  Please make a new dir, and use that.')
    return cb(false)
  }

  console.log(
    'Congratulations!\n' +
    'You have a development environment.\n' +
    '\n'+
    'From here on out, make sure to run the workshop in this dir\n'+
    '\n'+
    'You might notice that a `.npmrc` file will show up in there.\n' +
    'That normaly would not be required, but the workshop uses it\n' +
    'to mock out the parts that would normally talk to the internet.'
  )

  // Save the cwd so that we can ensure we're in the right place from now on
  fs.writeFileSync(path.resolve(datadir, 'cwd'), cwd)

  // Write the .npmrc file telling it to always use our local registry.
  var conf = fs.readFileSync(path.resolve(__dirname, '..', 'workshop-npmrc'), 'utf8')
  conf = conf.replace(/%USERCONFIG%/g, path.resolve(datadir, 'npmrc'))

  fs.writeFileSync(path.resolve(cwd, '.npmrc'), conf)

  return cb(true)
}