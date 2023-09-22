import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import tailwindcss from 'tailwindcss';

const settings = {
    plugins: [
        autoprefixer(),
        postcssPresetEnv({ stage: 1 }),
        cssnano({ preset: 'default' }),
        tailwindcss({
              config: path.join(__dirname, 'tailwind.config.cjs'),
            }),
    ],
};

export default settings;