import React from "react";

const ContactUs = () => {
  return (
    <section className="contact-us container mt-5 ">
      <h2 className="text-primary">طرق التواصل مع فريق الدعم :</h2>

      <div>
        <ul className="mt-4">
          <h3 className="fw-bold fs-4 mb-4"> البريد الالكتروني: </h3>
          <li className="fs-3 mb-3">
            يمكنك إرسال مشكلتك عبر البريد الإلكتروني: support@digitalpioneers.eg
          </li>

          <h3 className="fw-bold fs-4 mb-4">رقم الهاتف : </h3>
          <li className="fs-3"> يمكنك الاتصال بنا على الرقم: 0123-456-789</li>
          <li className="fs-3">
            مواعيد العمل: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-primary"> نصائح قبل التواصل مع الدعم:</h2>

        <p className="fs-4">
          ✅ تأكد من مراجعة صفحة الأسئلة الشائعة، فقد تجد إجابة سؤالك هناك!{" "}
        </p>
        <p className="fs-4">
          ✅عند إرسال استفسار، وضّح المشكلة بالتفصيل لسهولة الحل.
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
