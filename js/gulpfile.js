const {src, dest} = require("gulp");

function copy() {
    return src('scsss/components/*').pipe(dest('dist'))
}

exports.copy - copy