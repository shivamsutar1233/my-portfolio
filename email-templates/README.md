# EmailJS templates

Two templates back the Contact form: one notifies Shivam, the other
auto-replies to the visitor. Both are triggered from the same form
submission with the **same variable payload**, so the variable names below
must match exactly what's used in each template — that's what
[Modal.tsx](../src/components/Contact/Modal.tsx) sends.

## Shared variables

| Variable      | Meaning                                    |
| ------------- | ------------------------------------------- |
| `{{from_name}}` | The visitor's name (from the form)         |
| `{{reply_to}}`  | The visitor's email address (from the form) |
| `{{message}}`   | The visitor's message (from the form)      |
| `{{to_name}}`   | Always `"Shivam"` — only meaningful in the notification template |

## 1. Contact Notification (`contact-notification.html`)

Sent **to Shivam** when someone submits the form.

In the EmailJS template editor:

- **Content**: paste [`contact-notification.html`](./contact-notification.html)
- **Subject**: `New message from {{from_name}} via your portfolio`
- **To Email**: `shivam.as1233@gmail.com` (fixed — this doesn't need to be a variable, it's always the same inbox)
- **From Name**: `{{from_name}}`
- **Reply To**: `{{reply_to}}` — so replying to the notification email in Gmail goes straight back to the visitor

Copy the resulting **Template ID** into `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` in `.env.local`.

## 2. Auto-Reply (`auto-reply.html`)

Sent **to the visitor** confirming their message was received.

In the EmailJS template editor:

- **Content**: paste [`auto-reply.html`](./auto-reply.html)
- **Subject**: `Thanks for reaching out, {{from_name}}!`
- **To Email**: `{{reply_to}}` — dynamic, this is the visitor's own address
- **From Name**: `Shivam Sutar`
- **Reply To**: `shivam.as1233@gmail.com` — so if the visitor replies to the auto-reply, it reaches Shivam directly

Copy the resulting **Template ID** into `NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID` in `.env.local`.

## Behavior if one send fails

The two emails are sent in parallel. If the notification to Shivam succeeds
but the auto-reply fails (or vice versa), the form still reports success to
the visitor as long as **the notification** went through — that's the one
that actually matters to Shivam. An auto-reply failure is logged to the
console but doesn't block the "message sent" confirmation.
