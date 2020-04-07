var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Divider=_interopRequireDefault(require("../../Divider/Divider"));var _DrawerSection=_interopRequireDefault(require("./DrawerSection.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Drawer/DrawerSection/DrawerSection.js";var DrawerSection=function(_Component){(0,_inherits2.default)(DrawerSection,_Component);function DrawerSection(){(0,_classCallCheck2.default)(this,DrawerSection);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(DrawerSection).apply(this,arguments));}(0,_createClass2.default)(DrawerSection,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,label=_this$props.label,topDivider=_this$props.topDivider,bottomDivider=_this$props.bottomDivider,fullWidth=_this$props.fullWidth,style=_this$props.style;return _react.default.createElement(_reactNative.View,{style:[style,{paddingHorizontal:fullWidth?0:8,paddingTop:label?8:0}],__source:{fileName:_jsxFileName,lineNumber:29}},topDivider?_react.default.createElement(_Divider.default,{__source:{fileName:_jsxFileName,lineNumber:34}}):null,label?_react.default.createElement(_reactNative.Text,{style:_DrawerSection.default.label,__source:{fileName:_jsxFileName,lineNumber:35}},label):null,_react.default.createElement(_reactNative.View,{style:_DrawerSection.default.content,__source:{fileName:_jsxFileName,lineNumber:36}},children),bottomDivider?_react.default.createElement(_Divider.default,{__source:{fileName:_jsxFileName,lineNumber:37}}):null);}}]);return DrawerSection;}(_react.Component);(0,_defineProperty2.default)(DrawerSection,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),label:_propTypes.default.string,topDivider:_propTypes.default.bool,bottomDivider:_propTypes.default.bool,fullWidth:_propTypes.default.bool});var _default=(0,_withTheme.default)(DrawerSection);exports.default=_default;