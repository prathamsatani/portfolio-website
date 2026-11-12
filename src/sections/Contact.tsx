"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EMAIL = "iamprathamsatani2002@gmail.com";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});
type Values = z.infer<typeof schema>;

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "message", label: "Message" },
] as const;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  // No backend: hand the message to the visitor's mail client.
  const onSubmit = ({ name, email, message }: Values) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section wrap" aria-labelledby="contact-title">
      <p className="label text-accent">04 — Contact</p>
      <div className="mt-8 grid gap-16 lg:grid-cols-[1fr_500px]">
        <div>
          <h2 id="contact-title" className="font-serif text-display-l">
            Have a problem worth modelling? Let&apos;s talk.
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-block break-all text-body-l text-accent underline underline-offset-4"
          >
            {EMAIL}
          </a>
          <p className="label mt-6 text-muted">Boston, MA · Open to ML / AI engineering roles</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
          {fields.map((f) => {
            const error = errors[f.name]?.message;
            const props = {
              id: f.name,
              className: "field",
              "aria-invalid": !!error,
              "aria-describedby": error ? `${f.name}-error` : undefined,
              ...register(f.name),
            };
            return (
              <div key={f.name}>
                <label htmlFor={f.name} className="label text-muted">
                  {f.label}
                </label>
                {"type" in f ? (
                  <input type={f.type} autoComplete={f.autoComplete} {...props} />
                ) : (
                  <textarea rows={4} {...props} className="field resize-y" />
                )}
                {error && (
                  <p id={`${f.name}-error`} className="mt-2 text-body-s text-accent">
                    {error}
                  </p>
                )}
              </div>
            );
          })}
          <button type="submit" className="btn-primary self-start">
            Send message →
          </button>
        </form>
      </div>
    </section>
  );
}
