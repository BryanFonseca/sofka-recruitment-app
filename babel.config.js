module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
                    alias: {
                        "@ui": "./src/components/ui/index",
                        "@constants": "./src/constants/index",
                        "@utils": "./src/utils/index",
                        "@api": "./src/api/index",
                        "@hooks": "./src/hooks/index",
                    },
                },
            ],
        ],
    };
};
