import { cricket } from "@/lib/content";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";

export function Cricket() {
  const { table } = cricket;
  return (
    <section id={cricket.id} className="section bg-cream">
      <div className="container-page flex flex-col items-center gap-10">
        <SectionHeading
          title={
            <>
              {cricket.headingPre}
              <Highlight>{cricket.headingHighlight}</Highlight>
              {cricket.headingPost}
            </>
          }
          subtitle={cricket.body}
        />

        <div className="w-full max-w-3xl overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-neutral-200">
                {table.columns.map((col, i) => (
                  <th
                    key={i}
                    className={`px-4 py-4 text-sm font-semibold uppercase tracking-wide ${
                      i === table.highlightColumn
                        ? "bg-brand text-black"
                        : "text-neutral-500"
                    } ${i === 0 ? "" : "text-center"} ${
                      i === 0 ? "sticky left-0 bg-white" : ""
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, r) => (
                <tr
                  key={row.label}
                  className={`border-b border-neutral-100 transition-colors last:border-0 hover:bg-neutral-50 ${
                    r % 2 === 1 ? "bg-neutral-50/50" : ""
                  }`}
                >
                  <td className="sticky left-0 bg-inherit px-4 py-3.5 text-sm font-medium text-neutral-800">
                    {row.label}
                  </td>
                  {row.values.map((value, i) => {
                    const isHighlight = i + 1 === table.highlightColumn;
                    return (
                      <td
                        key={i}
                        className={`px-4 py-3.5 text-center text-sm ${
                          isHighlight
                            ? "bg-brand/15 font-bold text-neutral-900"
                            : "text-neutral-600"
                        }`}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="max-w-3xl text-center text-xs text-neutral-400">{table.footnote}</p>
      </div>
    </section>
  );
}
