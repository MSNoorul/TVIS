import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  const buildMessage = () => {
    if (!formRef.current || !formRef.current.reportValidity()) return null;
    const data = new FormData(formRef.current);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      `${t.contact.formName}: ${name}`,
      `${t.contact.formEmail}: ${email}`,
      ...(phone ? [`${t.contact.formPhone}: ${phone}`] : []),
      ...(company ? [`${t.contact.formCompany}: ${company}`] : []),
      "",
      message,
    ];

    return { name, subject: `${t.contact.subjectPrefix} ${name}`, body: lines.join("\n") };
  };

  const handleSendMail = () => {
    const result = buildMessage();
    if (!result) return;
    window.location.href = `mailto:${t.contact.email}?subject=${encodeURIComponent(result.subject)}&body=${encodeURIComponent(result.body)}`;
  };

  const handleSendWhatsapp = () => {
    const result = buildMessage();
    if (!result) return;
    const digits = t.contact.phone.replace(/\D/g, "");
    window.open(`https://wa.me/${digits}?text=${encodeURIComponent(result.body)}`, "_blank");
  };

  return (
    <Layout>
      <SEO
        title="Contact TVIS | Pump Systems Quote, Riyadh & Buraidah"
        description="Contact TVIS for pump system quotes and service support. Offices in Riyadh and Buraidah, Saudi Arabia — reach us by phone, email or WhatsApp."
        path="/contact"
      />
      <section className="bg-gradient-brand text-primary-foreground py-20">
        <div className="container max-w-3xl animate-fade-up">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-3">Get in touch</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold">{t.contact.title}</h1>
          <p className="mt-5 text-lg text-primary-foreground/85">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl border border-border p-7 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-brand text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t.contact.officeRiyadh}</div>
                  <div className="text-sm text-foreground leading-relaxed">{t.contact.address1}</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-7 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-brand text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t.contact.officeBuraidah}</div>
                  <div className="text-sm text-foreground leading-relaxed">{t.contact.address2}</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-7 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-brand text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t.contact.emailLabel}</div>
                  <a href={`mailto:${t.contact.email}`} className="text-sm text-foreground hover:text-accent transition-colors">{t.contact.email}</a>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-7 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-brand text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t.contact.phoneLabel}</div>
                  <a href={`tel:${t.contact.phone.replace(/\s+/g, "")}`} className="text-sm text-foreground hover:text-accent transition-colors" dir="ltr">{t.contact.phone}</a>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="lg:col-span-3 bg-card rounded-2xl border border-border p-8 shadow-elegant space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">{t.contact.formName}</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.formEmail}</Label>
                <Input id="email" name="email" type="email" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="phone">{t.contact.formPhone}</Label>
                <Input id="phone" name="phone" type="tel" inputMode="tel" dir="ltr" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{t.contact.formCompany}</Label>
                <Input id="company" name="company" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t.contact.formMessage}</Label>
              <Textarea id="message" name="message" rows={5} required />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button type="button" onClick={handleSendMail} size="lg" className="bg-gradient-brand hover:opacity-95 shadow-card-soft flex-1">
                <Mail className="w-4 h-4" />
                {t.contact.formSendMail}
              </Button>
              <Button type="button" onClick={handleSendWhatsapp} size="lg" variant="outline" className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="w-4 h-4" />
                {t.contact.formSendWhatsapp}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
