import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "سياسة الخصوصية | أشرف - مهندس برمجيات",
  description: "سياسة الخصوصية وكيفية التعامل مع بياناتك",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground">سياسة الخصوصية</h1>
        <p className="mt-4 text-muted-foreground">آخر تحديث: يناير 2024</p>

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. المعلومات التي نجمعها</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              عند استخدام نموذج التواصل في موقعنا، نجمع المعلومات التالية: الاسم، البريد الإلكتروني، ومحتوى الرسالة. هذه
              المعلومات تُستخدم فقط للرد على استفساراتك.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. كيف نستخدم معلوماتك</h2>
            <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
              <li>الرد على رسائلك واستفساراتك</li>
              <li>تحسين تجربة المستخدم في الموقع</li>
              <li>إرسال تحديثات حول المقالات الجديدة (بموافقتك فقط)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع، بما في ذلك تذكر تفضيلاتك للوضع الداكن/الفاتح. يمكنك
              تعطيل ملفات تعريف الارتباط من إعدادات متصفحك.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. التحليلات</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              نستخدم خدمات تحليلات لفهم كيفية استخدام الزوار للموقع. هذه البيانات مجهولة الهوية ولا تتضمن معلومات شخصية
              قابلة للتعريف.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. مشاركة المعلومات</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة، إلا إذا كان ذلك مطلوباً بموجب القانون.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. أمان البيانات</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الكشف أو الإتلاف.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. حقوقك</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها. يمكنك التواصل معنا لممارسة هذه الحقوق.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. التواصل</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر صفحة التواصل أو البريد الإلكتروني:
              ashraf@example.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
