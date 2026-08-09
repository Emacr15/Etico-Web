interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div className="footer__column">
      <h3>
        {title}
      </h3>

      <div className="footer__column-line" />

      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
