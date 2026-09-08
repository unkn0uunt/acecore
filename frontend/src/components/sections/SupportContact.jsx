import { useState } from 'react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import {
  supportChannels,
  supportFormFields,
  supportHeroCopy,
} from '../../data/support';

const emptyForm = supportFormFields.reduce((acc, field) => {
  acc[field.name] = '';
  return acc;
}, {});

function ChannelCard({ label, value, href, external }) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a className="support-channel" href={href} {...linkProps}>
      <div className="support-channel__copy">
        <span className="support-channel__label">{label}</span>
        <span className="support-channel__value">{value}</span>
      </div>
      <span className="support-channel__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default function SupportContact() {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form wiring (API / email) comes later — UI only for now.
  };

  return (
    <section className="support-contact" aria-labelledby="support-contact-title">
      <div className="support-contact__inner home-shell">
        <Reveal className="support-contact__intro">
          <p className="support-contact__eyebrow">{supportHeroCopy.eyebrow}</p>
          <h1 id="support-contact-title" className="support-contact__title">
            {supportHeroCopy.title}
          </h1>
          <p className="support-contact__description">{supportHeroCopy.description}</p>
        </Reveal>

        <div className="support-contact__layout">
          <Reveal className="support-contact__channels" y={20} delay={0.06}>
            {supportChannels.map((channel) => (
              <ChannelCard key={channel.id} {...channel} />
            ))}
          </Reveal>

          <Reveal className="support-contact__form-wrap" y={24} delay={0.1}>
            <form className="support-form" onSubmit={handleSubmit} noValidate>
              {supportFormFields.map((field) => {
                const sharedProps = {
                  id: field.id,
                  name: field.name,
                  value: form[field.name],
                  onChange: handleChange,
                  autoComplete: field.autoComplete,
                  className: 'support-form__control',
                };

                const fieldClass =
                  field.type === 'textarea'
                    ? 'support-form__field support-form__field--message'
                    : 'support-form__field';

                return (
                  <label key={field.id} className={fieldClass} htmlFor={field.id}>
                    <span className="support-form__label">{field.label}</span>
                    {field.type === 'textarea' ? (
                      <textarea {...sharedProps} rows={6} />
                    ) : (
                      <input {...sharedProps} type={field.type} />
                    )}
                  </label>
                );
              })}

              <div className="support-form__actions">
                <Button type="submit" variant="brand" className="support-form__submit">
                  Send message
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
