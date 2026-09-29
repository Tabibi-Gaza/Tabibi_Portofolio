export default function WhatsAppIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.1 11.5a8.1 8.1 0 0 1-11.9 7.1L4 20l1.4-4a8.1 8.1 0 1 1 14.7-4.5Z" />
      <path d="M9 8.7c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c-.2.2-.1.4 0 .6.4.7 1 1.3 1.7 1.7.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.3.6c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.4.4-1 .6-1.6.5-1.1-.2-2.3-.8-3.3-1.8-1-.9-1.7-2.1-1.9-3.2-.1-.7.2-1.4.6-1.9Z" />
    </svg>
  );
}
