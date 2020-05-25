const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const path=require("path")
module.exports={
    //入口文件的配置
    entry:{
        entry1:"./src/index.js",
        entry2:"./src/app.js"
    },
    // 项目出口文件的配置
    output:{
        path:path.resolve(__dirname,"dist"), //获取绝对路径
        // filename:"bundle.js"
        //自动识别文件名字
        filename:"[name].js"
    },
    //项目构建环境：production(生产环境) development(开发环境) none
    mode:'development',
    //loaders 的配置
    module: {
        rules:[
            {
                test:/\.css$/,
                //排除文件
                exclude:/node_modules/,
                use:["style-loader",'css-loader']
            },
            {
                test:/\.less$/,
                exclude:/node_modules/,
                use:['style-loader','css-loader','less-loader']

            },
            {
                test:/\.(png|jpg|jpeg|gif|webp|svg)$/i,
                exclude:/node_modules/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:1024*8,//8kb一下的图片采用base64的图片
                        outputPath:"images" //设置图片打包后的路径
                    },
                }]

            },
            {
                test:/\.(html|htm)$/,
                use:["html-loader"],
            }
            
         
        ]
    },
    //插件的配置
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    //配置开发服务配置
    devServer:{}
}