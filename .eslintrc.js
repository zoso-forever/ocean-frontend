module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
	node: true,
	es6: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
	 "no-tabs": 0,
	 indent: [2, 'tab']
  },
  globals: {
	  opts: true,
	  vue: true
  }
}
