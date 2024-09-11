import yargs from 'yargs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const PRODUCTION = !!yargs.argv.production;

export default {
    PRODUCTION,
    paths: {
        src: {
            js: {
                main: './src/assets/js/main.ts',
                all:  './src/assets/js/**/*.ts'
            },
            scss: './src/assets/scss/**/*.scss',
            html: {
                main: './src/*.{html,twig}',
                all: './src/**/*.{html,twig,json,js}',
                data: './src/template/data/**/*.js'
            },
            static: ['./src/assets/img/**/*.{png,svg,jpg}']
        },
        
        dest: {
            root: './dist',
            js: './dist/assets/js',
            css: './dist/assets/css',
            static: './dist/assets'
        }
    },
    settings: {
        server: {
            server:                 'dist',
            port:                    8000,
            extensions:             ['html']
        },
        webpack: {
            mode: PRODUCTION ? 'production' : 'development',
            target: ['web', 'es6'],
            optimization: {
                usedExports: false
            },
            resolve: {
                extensions: ['.ts', '.tsx'],
                plugins: [
                    new TsconfigPathsPlugin({
                        extensions: ['.ts', '.tsx']
                    })
                ]
            },
            module: {
                rules: [
                    {
                        test: /\.(ts|tsx)?$/,
                        exclude: /node_modules/,
                        loader: 'ts-loader'
                    }
                ]
            }
        }
    }
}