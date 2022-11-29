// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                aboutUs: resolve(__dirname, 'pages/about-us/index.html'),
                changePassword: resolve(__dirname, 'pages/change-password/index.html'),
                contactUs: resolve(__dirname, 'pages/contact-us/index.html'),
                forgotPassword: resolve(__dirname, 'pages/forgot-password/index.html'),
                login: resolve(__dirname, 'pages/login/index.html'),
                post: resolve(__dirname, 'pages/post/index.html'),
                productItem: resolve(__dirname, 'pages/product-item/index.html'),
                register: resolve(__dirname, 'pages/register/index.html'),
                search: resolve(__dirname, 'pages/search/index.html'),

            }
        }
    }
})
