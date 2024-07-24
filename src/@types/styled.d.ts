import 'styled-components/native';

import { THEMES } from '../global/thmesGlobal';

declare module 'styled-components/native' {
  type ThemeType = typeof THEMES;
  export interface DefaultTheme extends ThemeType { }
}