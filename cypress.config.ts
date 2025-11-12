import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    env: {
      username: 'test@example.com',
      password: 'password'
    },
    setupNodeEvents(on, config) {
      const webpack = require('@cypress/webpack-preprocessor')
      const options = {
        webpackOptions: {
          resolve: {
            alias: {
              '@': path.resolve(__dirname, './src')
            },
            extensions: ['.ts', '.js']
          },
          module: {
            rules: [
              {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                  transpileOnly: true
                }
              }
            ]
          }
        }
      }
      on('file:preprocessor', webpack(options))
      return config
    },
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
