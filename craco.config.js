const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@context': path.resolve(__dirname, 'src/context'),
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@videos': path.resolve(__dirname, 'src/assets/videos'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
        },
    },
    style: {
        postcss: {
            plugins: [require('autoprefixer')],
        },
    },
};
