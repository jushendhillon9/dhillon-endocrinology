type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-slate-600">{body}</p> : null}
    </div>
  );
}
