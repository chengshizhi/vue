var webpack=require('webpack');
module.exports={
  entry:'./main.js',

  output:{
    path:__dirname,
    filename:'build.js'
  },

  module:{
    loaders:[
      {test:/\.vue$/, loader:'vue'},
      {test:/\.js$/, loader:'babel', exclude:/node_modules/}
    ]
  },
  babel:{
    presets:['es2015'],
    plugins:['transform-runtime']
  },
  plugins:[
    new webpack.BannerPlugin('武汉中科天翔')
  ]
};