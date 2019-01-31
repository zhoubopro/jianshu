import { createGlobalStyle } from 'styled-components';

export const Globaliconfont = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1548946922657'); /* IE9 */
  src: url('./iconfont.eot?t=1548946922657#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1548946922657') format('woff'),
  url('./iconfont.ttf?t=1548946922657') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1548946922657#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;