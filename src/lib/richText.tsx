import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Renderiza texto enriquecido dentro de un párrafo:
 *  - **negrita**
 *  - ==resaltado== (marcador amarillo de marca)
 *  - [texto](/enlace)
 */
export function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*([^*]+)\*\*|==([^=]+)==|\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    if (match[2] !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-neutral-900">
          {match[2]}
        </strong>,
      );
    } else if (match[3] !== undefined) {
      nodes.push(
        <mark key={`${keyPrefix}-m-${i}`} className="rounded bg-brand/40 px-1 text-neutral-900">
          {match[3]}
        </mark>,
      );
    } else if (match[4] !== undefined) {
      nodes.push(
        <Link
          key={`${keyPrefix}-l-${i}`}
          href={match[5]}
          className="font-medium text-neutral-900 underline decoration-brand decoration-2 underline-offset-2 transition hover:text-neutral-500"
        >
          {match[4]}
        </Link>,
      );
    }
    lastIndex = regex.lastIndex;
    i++;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}
