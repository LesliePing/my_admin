import elementEnLocale from "element-plus/es/locale/lang/zh-cn"; // element-ui lang
import elementZhLocale from "element-plus/es/locale/lang/zh-cn"; // element-ui lang
import elementTwLocale from "element-plus/es/locale/lang/zh-cn"; // element-ui lang
import enLocale from "./en";
import zhLocale from "./zh";
import twLocale from "./tw";

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
  },
  tw: {
    ...twLocale,
    ...elementTwLocale,
  },
};
