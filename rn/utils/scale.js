/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */
import {
	Dimensions,
	PixelRatio,
} from 'react-native';

let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
let fontScale = PixelRatio.getFontScale();
let pixelRatio = PixelRatio.get();
// 高保真的宽度和高度
const designWidth = 750.0;
const designHeight = 1334.0;

// 根据dp获取屏幕宽度的px
let screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW);

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function setSpText(size) {
	var scaleWidth = screenW / designWidth;
	var scaleHeight = screenH / designHeight;
	var scale = Math.min(scaleWidth, scaleHeight);
	size = Math.round(size * scale / fontScale + 0.5);
	return size;
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSize(size) {
	var scaleWidth = size * screenPxW / designWidth;
	size = Math.round((scaleWidth / pixelRatio + 0.5));
	return size;
}