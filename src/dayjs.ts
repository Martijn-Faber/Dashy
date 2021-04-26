import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/nl";
import localizedFormat from "dayjs/plugin/localizedFormat";

export default dayjs; {
    dayjs.locale(navigator.language || 'nl');
    dayjs.extend(localizedFormat);
}