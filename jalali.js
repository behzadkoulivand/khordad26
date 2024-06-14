const moment = require("jalali-moment");

exports.formatDate = (date) => {
    return moment(date).locale("fa").format("YYYY MM D");
};

exports.formatDate2 = (date) => {
    return moment(date).locale("fa").format("D MMM YYYY");
};