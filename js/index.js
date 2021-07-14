$(document).ready(function () {

    // شهر، يوم، ساعة، دقيقة، ثانية odHMS بصيغة Countdown إضافة عداد الزمني 
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#defaultCountdown').countdown({ until: austDay, format: 'odHMS' });
        $('#year').text(austDay.getFullYear());
    });
    // ‫ إلغاء الحركة في شاشات الجوال وتهيئة مكتبة wow  للعمل
    var wow = new WOW({
        mobile: false
    });
    wow.init();



    $(function () {
                        // event
        $('.form-control').blur(function () {
            var x = document.forms["myForm1"]["email1"].value;
            var atpos = x.indexOf("@");// @ دليل رمز
            var dotpos = x.lastIndexOf(".");// دليل الرمز نقطة ضمن عنوان مُدخل 
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {//     إذا تحقق من احد الشروط الثلاثة سوف يظهر الرسالة خطاء 
                // عند كتابة إيميل بشكل خطاء تظهر رسالة بلون أحمر
                $(this).parent().find(".alert.alert-danger").fadeIn(200);
            }
            else {   //  عند كتابة إيميل بشكل صع تظهر رسالة بلون أخضرر 
                $(this).parent().find(".alert.alert-success").fadeIn(200);
            }
        });

        $('.form-control').blur(function () {
            var x = document.forms["myForm2"]["email2"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                $(this).parent().find(".alert.alert-danger").fadeIn(200);
            }
            else {
                $(this).parent().find(".alert.alert-success").fadeIn(200);
            }
        });
    });
});





