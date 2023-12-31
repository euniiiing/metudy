const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
    addWebpackAlias({
        "@": path.resolve(__dirname, "src"),
        "@icons": path.resolve(__dirname, "src/components/icons"),
        "@hoc": path.resolve(__dirname, "src/components/hoc"),
        "@atoms": path.resolve(__dirname, "src/components/ui/atoms"),
        "@molecules": path.resolve(__dirname, "src/components/ui/molecules"),
        "@organisms": path.resolve(__dirname, "src/components/ui/organisms"),
        "@images": path.resolve(__dirname, "src/images"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@services": path.resolve(__dirname, "src/services"),
        "@store": path.resolve(__dirname, "src/store"),
        "@types": path.resolve(__dirname, "src/types"),
        "@style": path.resolve(__dirname, "src/style"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@canvas": path.resolve(__dirname, "src/canvas"),
        "@common": path.resolve(__dirname, "src/components/ui/common"),
    })
);
