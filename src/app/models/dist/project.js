"use strict";
exports.__esModule = true;
exports.Project = void 0;
var Project = /** @class */ (function () {
    function Project(_id, name, description, category, year, langs, sitio, image) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.year = year;
        this.langs = langs;
        this.sitio = sitio;
        this.image = image;
    }
    return Project;
}());
exports.Project = Project;
