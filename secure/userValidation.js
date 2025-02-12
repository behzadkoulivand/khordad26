const Yup = require("yup");

exports.schema = Yup.object().shape({
    fullname: Yup.string()
        .required("نام و نام خانوادگی الزامی می باشد")
        .min(4, "نام و نام خانوادگی نباید کمتر از 4 کاراکتر باشد")
        .max(255, "نام و نام خانوادگی نباید بیشتر از 255 کاراکتر باشد"),
    username: Yup.string()
        .required("ایمیل الزامی می باشد")
        .min(4, "نام و نام خانوادگی نباید کمتر از 4 کاراکتر باشد"),
    password: Yup.string()
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد")
        .max(255, "کلمه عبور نباید بیشتر از 255 کاراکتر باشد")
        .required("کلمه عبور الزامی می باشد"),
    confirmPassword: Yup.string()
        .required("تکرار کلمه عبور الزامی می باشد")
        .oneOf([Yup.ref("password"), null], "کلمه های عبور یکسان نیستند"),
    user_type: Yup.mixed().oneOf(
        ["admin", "supervisor", "normal", "security"],
        "نوع کاربر را انتخاب کنید"
    ), 
    organization_code: Yup.mixed().oneOf(
        [111, 112, 113, 114, 115, 1141, 1142, 1143],
        "کد سازمانی را انتخاب کنید"
    ),   
});
