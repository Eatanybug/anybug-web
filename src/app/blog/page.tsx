import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blog } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: blog.subtitle,
};

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

export default function BlogPage() {
  return (
    <div className="section bg-white">
      <div className="container-page flex flex-col gap-10">
        <header className="flex max-w-2xl flex-col gap-3">
          <span className="inline-flex w-fit rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
            {blog.eyebrow}
          </span>
          <h1 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">{blog.subtitle}</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blog.posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                {post.cover && (
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                  {formatDate(post.date)}
                </span>
                <h2 className="font-serif text-xl font-semibold tracking-tight text-neutral-900">
                  {post.title}
                </h2>
                <p className="flex-1 text-sm text-neutral-500">{post.excerpt}</p>
                <span className="mt-2 text-sm font-semibold text-neutral-900 transition group-hover:text-brand">
                  Leer más ?
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
