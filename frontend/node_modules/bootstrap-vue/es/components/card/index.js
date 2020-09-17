"use strict";

exports.__esModule = true;
exports.default = exports.CardPlugin = void 0;

var _card = require("./card");

exports.BCard = _card.BCard;

var _cardHeader = require("./card-header");

exports.BCardHeader = _cardHeader.BCardHeader;

var _cardBody = require("./card-body");

exports.BCardBody = _cardBody.BCardBody;

var _cardTitle = require("./card-title");

exports.BCardTitle = _cardTitle.BCardTitle;

var _cardSubTitle = require("./card-sub-title");

exports.BCardSubTitle = _cardSubTitle.BCardSubTitle;

var _cardFooter = require("./card-footer");

exports.BCardFooter = _cardFooter.BCardFooter;

var _cardImg = require("./card-img");

exports.BCardImg = _cardImg.BCardImg;

var _cardImgLazy = require("./card-img-lazy");

exports.BCardImgLazy = _cardImgLazy.BCardImgLazy;

var _cardText = require("./card-text");

exports.BCardText = _cardText.BCardText;

var _cardGroup = require("./card-group");

exports.BCardGroup = _cardGroup.BCardGroup;

var _plugins = require("../../utils/plugins");

var CardPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BCard: _card.BCard,
    BCardHeader: _cardHeader.BCardHeader,
    BCardBody: _cardBody.BCardBody,
    BCardTitle: _cardTitle.BCardTitle,
    BCardSubTitle: _cardSubTitle.BCardSubTitle,
    BCardFooter: _cardFooter.BCardFooter,
    BCardImg: _cardImg.BCardImg,
    BCardImgLazy: _cardImgLazy.BCardImgLazy,
    BCardText: _cardText.BCardText,
    BCardGroup: _cardGroup.BCardGroup
  }
});
exports.CardPlugin = CardPlugin;
var _default = CardPlugin;
exports.default = _default;