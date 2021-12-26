"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.AllCaps = exports.Tertiary = exports.Secondary = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: 'select' },
        fontColor: { control: 'color' },
    },
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args), void 0); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Best label',
    size: 'h1',
    allCaps: false,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Best label',
    size: 'h1',
    allCaps: false,
    color: 'secondary',
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: 'Tertiary',
    size: 'h1',
    allCaps: false,
    color: 'tertiary',
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'AllCaps',
    size: 'h1',
    allCaps: true,
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    label: 'Custom font color',
    size: 'h1',
    fontColor: '#9dff00',
};
