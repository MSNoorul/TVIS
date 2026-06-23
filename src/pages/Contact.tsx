import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success(t.contact.sent);
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <Layout>
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
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t.contact.addressLabel}</div>
                  <div className="text-sm text-foreground leading-relaxed">{t.contact.address}</div>
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
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 bg-card rounded-2xl border border-border p-8 shadow-elegant space-y-5">
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
            <div className="space-y-2">
              <Label htmlFor="company">{t.contact.formCompany}</Label>
              <Input id="company" name="company" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t.contact.formMessage}</Label>
              <Textarea id="message" name="message" rows={5} required />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="bg-gradient-brand hover:opacity-95 shadow-card-soft w-full sm:w-auto">
              {t.contact.formSubmit}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
