"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, User, GraduationCap } from "lucide-react";

export type PortalVariant = "agent" | "student";

interface PortalLoginCardProps {
  variant: PortalVariant;
}

const CONFIG = {
  agent: {
    badge: "Agent Portal",
    BadgeIcon: User,
    heading: "Agent Sign In",
    description: (
      <>
        Access your <span className="font-semibold text-[#0d4a3a]">agent dashboard</span> to
        manage referrals, track applications and view commission statements.
      </>
    ),
    emailLabel: "Agent Email Address",
    emailPlaceholder: "agent@youragency.com",
    buttonText: "Sign In to Agent Portal",
    bottomLinks: (
      <div className="flex flex-col items-center gap-1.5 text-[13px] font-sans text-[#444]">
        <p>
          Not yet a registered agent?{" "}
          <Link href="/contact" className="font-semibold text-[#0d4a3a] hover:underline">
            Contact us
          </Link>{" "}
          to get started.
        </p>
        <p>
          Are you a student?{" "}
          <Link href="/student-login" className="font-semibold text-[#0d4a3a] hover:underline">
            Student login
          </Link>
        </p>
      </div>
    ),
  },
  student: {
    badge: "Student Portal",
    BadgeIcon: GraduationCap,
    heading: "Welcome Back",
    description: (
      <>
        Sign in to access your{" "}
        <span className="font-semibold text-[#0d4a3a]">student dashboard</span>, results,
        timetable and support services.
      </>
    ),
    emailLabel: "Student Email Address",
    emailPlaceholder: "you@student.stockdaleinstitute.edu.au",
    buttonText: "Sign In to Student Portal",
    bottomLinks: (
      <div className="flex flex-col items-center gap-1.5 text-[13px] font-sans text-[#444]">
        <p>
          Not yet enrolled?{" "}
          <Link href="/admission" className="font-semibold text-[#0d4a3a] hover:underline">
            Apply now
          </Link>{" "}
          to get started.
        </p>
        <p>
          Are you an agent?{" "}
          <Link href="/agent-login" className="font-semibold text-[#0d4a3a] hover:underline">
            Agent login
          </Link>
        </p>
      </div>
    ),
  },
} as const;

interface FormState {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }
  return errors;
}

export default function PortalLoginCard({ variant }: PortalLoginCardProps) {
  const cfg = CONFIG[variant];
  const { BadgeIcon } = cfg;

  const [form, setForm] = useState<FormState>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const next = { ...form, [name]: value };
    setForm(next);
    if (touched[name]) {
      setErrors(validate(next));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ email: true, password: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // TODO: submit to auth endpoint
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.1)] w-full max-w-[420px] mx-auto px-8 py-8 flex flex-col items-center gap-5">
      {/* Logo */}
      <Image
        src="/images/logo/main.png"
        alt="Stockdale"
        width={160}
        height={52}
        className="object-contain"
      />

      {/* Badge */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d4a3a] text-white text-[11px] font-sans font-semibold uppercase tracking-wide">
        <BadgeIcon size={12} strokeWidth={2} />
        {cfg.badge}
      </span>

      {/* Heading */}
      <h1 className="font-agatho text-[30px] leading-tight text-[#0a0a0a] text-center">
        {cfg.heading}
      </h1>

      {/* Description */}
      <p className="font-sans text-[14px] leading-[22px] text-[#6b7280] text-center max-w-[300px]">
        {cfg.description}
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4" noValidate>
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-[13px] font-medium text-[#2d2d2d]">
            {cfg.emailLabel}
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={cfg.emailPlaceholder}
            autoComplete="email"
            className={[
              "w-full bg-white border rounded-[8px] px-4 py-3 font-sans text-[14px] text-[#0a0a0a] placeholder:text-[#aaa] outline-none transition-colors",
              errors.email && touched.email
                ? "border-red-400 focus:ring-1 focus:ring-red-400"
                : "border-[#e5e7eb] focus:ring-1 focus:ring-[#0d4a3a]",
            ].join(" ")}
          />
          {errors.email && touched.email && (
            <p className="font-sans text-[12px] text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-[13px] font-medium text-[#2d2d2d]">Password</label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
              autoComplete="current-password"
              className={[
                "w-full bg-white border rounded-[8px] px-4 py-3 pr-11 font-sans text-[14px] text-[#0a0a0a] placeholder:text-[#aaa] outline-none transition-colors",
                errors.password && touched.password
                  ? "border-red-400 focus:ring-1 focus:ring-red-400"
                  : "border-[#e5e7eb] focus:ring-1 focus:ring-[#0d4a3a]",
              ].join(" ")}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-[#555] transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && touched.password && (
            <p className="font-sans text-[12px] text-red-500">{errors.password}</p>
          )}
          <div className="flex justify-end">
            <Link
              href="#"
              className="font-sans text-[12px] text-[#0d4a3a] hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 rounded-full font-sans font-semibold text-[13px] uppercase tracking-[1px] text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(134.19deg, #0d4a3a 0%, #11604a 100%)",
          }}
        >
          {cfg.buttonText}
        </button>
      </form>

      {/* Divider */}
      <div className="w-full flex items-center gap-3">
        <div className="flex-1 h-px bg-[#e5e7eb]" />
        <span className="font-sans text-[12px] text-[#aaa]">or</span>
        <div className="flex-1 h-px bg-[#e5e7eb]" />
      </div>

      {/* Bottom links */}
      {cfg.bottomLinks}
    </div>
  );
}
