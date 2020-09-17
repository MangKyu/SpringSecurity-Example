"use strict";

exports.__esModule = true;
exports.default = exports.CarouselPlugin = void 0;

var _carousel = require("./carousel");

exports.BCarousel = _carousel.BCarousel;

var _carouselSlide = require("./carousel-slide");

exports.BCarouselSlide = _carouselSlide.BCarouselSlide;

var _plugins = require("../../utils/plugins");

var CarouselPlugin =
/*#__PURE*/
(0, _plugins.pluginFactory)({
  components: {
    BCarousel: _carousel.BCarousel,
    BCarouselSlide: _carouselSlide.BCarouselSlide
  }
});
exports.CarouselPlugin = CarouselPlugin;
var _default = CarouselPlugin;
exports.default = _default;