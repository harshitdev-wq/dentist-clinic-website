import { useState, type FormEvent, type ReactNode } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { clinic, services } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

type Values = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "Anytime",
  message: "",
};

const inputClass =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-100";

const reassurance = [
  { icon: Clock, text: "Same-day appointments available" },
  { icon: ShieldCheck, text: "Most major insurance accepted" },
  { icon: Sparkles, text: "New-patient exam only $89" },
];

const chevronClass =
  "pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40";

export function Appointment() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const update = (field: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (v: Values): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
      e.email = "Please enter a valid email address.";
    if (v.phone.trim().length < 7) e.phone = "Please enter a valid phone number.";
    if (!v.service) e.service = "Please choose a service.";
    if (!v.date) e.date = "Please choose a preferred date.";
    else if (v.date < today) e.date = "Date can't be in the past.";
    return e;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <Section id="appointment" className="bg-white py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left — copy */}
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="Book online"
            title="Reserve your visit in under a minute"
            subtitle="Tell us a little about you and we'll confirm your appointment within one business hour. Prefer to talk? Give us a call."
          />

          <ul className="mt-8 space-y-3">
            {reassurance.map((r) => (
              <li key={r.text} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <r.icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.9} />
                </span>
                <span className="text-sm font-medium text-ink/75">{r.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-ink/8 bg-cream p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              Prefer to call?
            </p>
            <a
              href={clinic.phoneHref}
              className="mt-1 flex items-center gap-2 font-display text-xl font-semibold text-brand-700 hover:text-brand-800"
            >
              <Phone className="h-5 w-5" />
              {clinic.phone}
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="rounded-3xl border border-ink/8 bg-white p-6 shadow-card sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                    Request received!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-ink/65">
                    Thanks, {values.name.split(" ")[0] || "friend"} — our team
                    will reach out shortly to confirm your{" "}
                    {values.service.toLowerCase()} appointment. We can't wait to
                    meet you.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Button href={clinic.phoneHref} variant="primary">
                      Call us now
                    </Button>
                    <Button onClick={reset} variant="outline">
                      Book another
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="name" label="Full name" error={errors.name}>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Doe"
                        value={values.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={cn(
                          inputClass,
                          errors.name
                            ? "border-red-300 focus:ring-red-100"
                            : "border-ink/12 focus:border-brand-400",
                        )}
                      />
                    </Field>

                    <Field id="email" label="Email" error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@email.com"
                        value={values.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className={cn(
                          inputClass,
                          errors.email
                            ? "border-red-300 focus:ring-red-100"
                            : "border-ink/12 focus:border-brand-400",
                        )}
                      />
                    </Field>

                    <Field id="phone" label="Phone" error={errors.phone}>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(415) 555-0192"
                        value={values.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        className={cn(
                          inputClass,
                          errors.phone
                            ? "border-red-300 focus:ring-red-100"
                            : "border-ink/12 focus:border-brand-400",
                        )}
                      />
                    </Field>

                    <Field
                      id="service"
                      label="Service needed"
                      error={errors.service}
                    >
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={values.service}
                          onChange={(e) => update("service", e.target.value)}
                          aria-invalid={!!errors.service}
                          aria-describedby={
                            errors.service ? "service-error" : undefined
                          }
                          className={cn(
                            inputClass,
                            "appearance-none pr-10",
                            values.service ? "text-ink" : "text-ink/40",
                            errors.service
                              ? "border-red-300 focus:ring-red-100"
                              : "border-ink/12 focus:border-brand-400",
                          )}
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {services.map((s) => (
                            <option key={s.title} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Emergency care">Emergency care</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                        <ChevronDown className={chevronClass} />
                      </div>
                    </Field>

                    <Field
                      id="date"
                      label="Preferred date"
                      error={errors.date}
                    >
                      <input
                        id="date"
                        name="date"
                        type="date"
                        min={today}
                        value={values.date}
                        onChange={(e) => update("date", e.target.value)}
                        aria-invalid={!!errors.date}
                        aria-describedby={errors.date ? "date-error" : undefined}
                        className={cn(
                          inputClass,
                          values.date ? "text-ink" : "text-ink/40",
                          errors.date
                            ? "border-red-300 focus:ring-red-100"
                            : "border-ink/12 focus:border-brand-400",
                        )}
                      />
                    </Field>

                    <Field id="time" label="Preferred time">
                      <div className="relative">
                        <select
                          id="time"
                          name="time"
                          value={values.time}
                          onChange={(e) => update("time", e.target.value)}
                          className={cn(
                            inputClass,
                            "appearance-none pr-10 border-ink/12 text-ink focus:border-brand-400",
                          )}
                        >
                          <option>Anytime</option>
                          <option>Morning (8am–12pm)</option>
                          <option>Afternoon (12pm–6pm)</option>
                        </select>
                        <ChevronDown className={chevronClass} />
                      </div>
                    </Field>
                  </div>

                  <Field id="message" label="Anything we should know? (optional)">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your smile goals or concerns…"
                      value={values.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={cn(
                        inputClass,
                        "resize-none border-ink/12 focus:border-brand-400",
                      )}
                    />
                  </Field>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-ink/50">
                      By booking you agree to our friendly reminder texts &amp;
                      emails.
                    </p>
                    <Button type="submit" variant="primary" className="shrink-0">
                      <CalendarCheck className="h-[1.05rem] w-[1.05rem]" />
                      Request appointment
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold text-ink/70"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
