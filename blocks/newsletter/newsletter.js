/**
 * Newsletter signup form.
 * Authored as one row: [placeholder text | button label].
 * Not yet connected to a mailing service, so submission is a no-op.
 * @param {Element} block The newsletter block element
 */
export default function decorate(block) {
  const cells = [...(block.firstElementChild?.children || [])];
  const placeholder = cells[0]?.textContent.trim() || 'Your email address';
  const label = cells[1]?.textContent.trim() || 'Sign up';

  const form = document.createElement('form');
  form.className = 'newsletter-form';

  const inputLabel = document.createElement('label');
  inputLabel.className = 'newsletter-label';
  inputLabel.htmlFor = 'newsletter-email';
  inputLabel.textContent = placeholder;

  const input = document.createElement('input');
  input.type = 'email';
  input.id = 'newsletter-email';
  input.name = 'email';
  input.required = true;
  input.autocomplete = 'email';
  input.placeholder = placeholder;

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = label;

  form.append(inputLabel, input, button);
  form.addEventListener('submit', (e) => e.preventDefault());

  block.replaceChildren(form);
}
