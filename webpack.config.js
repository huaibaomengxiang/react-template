module.exports = (env,args) => {
  return args.mode === 'production' ?
    require('./build/webpack.prod') : require('./build/webpack.dev')
}