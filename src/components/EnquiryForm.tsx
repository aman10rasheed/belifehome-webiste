"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions } from "@/lib/services";
import { CheckCircleIcon } from "./icons";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = (data.get("name") ?? "").toString().trim();

    // TODO: POST `data` to the care-team inbox / CRM before showing the
    // confirmation. The design ships with the optimistic state only.
    setFirstName(name ? name.split(" ")[0] : "there");
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setFirstName("");
  };

  if (submitted) {
    return (
      <div className="bl-form-card">
        <div className="bl-success">
          <div className="bl-success-icon">
            <CheckCircleIcon size={38} />
          </div>
          <h3 className="bl-success-title">Thank you, {firstName}!</h3>
          <p className="bl-success-text">
            Your request is received. Our care coordinator will call you shortly
            to confirm the details.
          </p>
          <button type="button" onClick={reset} className="bl-success-btn">
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bl-form-card">
      <form onSubmit={onSubmit} className="bl-form">
        <h3 className="bl-form-title">Service enquiry</h3>

        <div className="bl-form-row">
          <label className="bl-label">
            Full name*
            <input
              name="name"
              required
              placeholder="Your name"
              autoComplete="name"
              className="bl-input"
            />
          </label>
          <label className="bl-label">
            Mobile number*
            <input
              name="phone"
              required
              type="tel"
              placeholder="+91 / +971"
              autoComplete="tel"
              className="bl-input"
            />
          </label>
        </div>

        <div className="bl-form-row">
          <label className="bl-label">
            Service needed*
            <select name="service" required defaultValue="" className="bl-select">
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="bl-label">
            Location*
            <input
              name="location"
              required
              placeholder="City / Emirate"
              className="bl-input"
            />
          </label>
        </div>

        <label className="bl-label">
          Tell us about the care needed
          <textarea
            name="notes"
            rows={3}
            placeholder="e.g. elderly parent recovering from surgery, needs day-shift nursing"
            className="bl-textarea"
          />
        </label>

        <button type="submit" className="bl-submit">
          Request Service
        </button>
        <p className="bl-form-privacy">
          We respect your privacy. Your details are never shared.
        </p>
      </form>
    </div>
  );
}
