import { useId, useState } from 'react';

function AccordionItem({ item, isOpen, onToggle }) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={`accordion__item${isOpen ? ' is-open' : ''}`}>
      <h3 className="accordion__heading">
        <button
          id={buttonId}
          type="button"
          className="accordion__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="accordion__question">{item.question}</span>
          <span className="accordion__chevron" aria-hidden="true" />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="accordion__panel"
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function Accordion({ items = [], allowMultiple = false, className = '' }) {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    setOpenIds((current) => {
      const isOpen = current.includes(id);
      if (allowMultiple) {
        return isOpen ? current.filter((itemId) => itemId !== id) : [...current, id];
      }
      return isOpen ? [] : [id];
    });
  };

  return (
    <div className={`accordion ${className}`.trim()}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}
