import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blog } from "@/lib/content";

export function generateStaticParams() {
  return blog.posts.map((p) => ({ slug: p.slug }));
}

/**
 * Renderiza texto enriquecido dentro de un párrafo:
 *  - **negrita**
 *  - ==resaltado== (marcador amarillo)
 *  - [texto](/enlace)
 */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
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

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="section bg-white">
      <div className="container-page mx-auto flex max-w-3xl flex-col gap-6">
        <Link href="/blog" className="text-sm text-neutral-500 transition hover:text-neutral-900">
          ← Volver al blog
        </Link>

        <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
          {formatDate(post.date)}
        </span>
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          {post.title}
        </h1>

        {post.cover && (
          <div className="relative aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-2xl bg-cream ring-1 ring-neutral-200">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex flex-col gap-5 pt-2">
          {post.body.map((block, i) =>
            block.startsWith("## ") ? (
              <h2
                key={i}
                className="mt-6 font-serif text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl"
              >
                {renderInline(block.slice(3), `h-${i}`)}
              </h2>
            ) : (
              <p key={i} className="text-base leading-relaxed text-neutral-700 sm:text-lg">
                {renderInline(block, `p-${i}`)}
              </p>
            ),
          )}
        </div>
      </div>
    </article>
  );
}
