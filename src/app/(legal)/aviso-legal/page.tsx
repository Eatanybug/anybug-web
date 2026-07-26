export const metadata = { title: "Aviso legal" };

export default function AvisoLegal() {
  return (
    <div className="container-page section max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Aviso legal</h1>

      <div className="mb-8 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Borrador orientativo.</strong> Revísalo con un profesional antes
        de publicar. Este texto es una plantilla informativa y no constituye
        asesoramiento legal.
      </div>

      <p className="mb-8 text-sm text-neutral-500">
        Última actualización: 20 de julio de 2026
      </p>

      <div className="space-y-6 text-neutral-700 leading-relaxed">
        <section>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y de Comercio
            Electrónico (LSSI-CE), se ponen a disposición de los usuarios los
            siguientes datos identificativos del titular de este sitio web.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            1. Identificación del titular
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Titular: Sara Aadía Manzano</li>
            <li>NIF: 45317648N</li>
            <li>Domicilio: C/ Recogidas 46, 4º A, 18002 Granada (España)</li>
            <li>
              Correo electrónico:{" "}
              <a className="underline" href="mailto:sara@eatanybug.com">
                sara@eatanybug.com
              </a>
            </li>
            <li>
              Teléfono:{" "}
              <a className="underline" href="tel:+34694270709">
                694 270 709
              </a>
            </li>
            <li>Sitio web: www.eatanybug.com</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            2. Datos del fabricante del producto
          </h2>
          <p>
            Los productos comercializados en este sitio son fabricados por:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>SANAVI, S.A.</li>
            <li>CIF: A18027961</li>
            <li>Registro sanitario (RGSEAA): 20.18217/GR</li>
            <li>Domicilio: C/ Las Eras s/n, 18327 Láchar (Granada, España)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            3. Objeto
          </h2>
          <p>
            Este sitio web tiene por objeto la promoción y la venta online de
            barritas de proteína elaboradas con harina de grillo (Acheta
            domesticus), así como ofrecer información sobre la marca AnyBug y sus
            productos. Los envíos se realizan desde España.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            4. Propiedad intelectual e industrial
          </h2>
          <p>
            Todos los contenidos del sitio (textos, imágenes, marcas, logotipos,
            diseño y código) están protegidos por los derechos de propiedad
            intelectual e industrial y pertenecen al titular o a terceros que han
            autorizado su uso. Queda prohibida su reproducción total o parcial,
            distribución, comunicación pública o transformación sin autorización
            expresa.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            5. Exención de responsabilidad
          </h2>
          <p>
            El titular no se responsabiliza del mal uso que se realice de los
            contenidos del sitio, siendo responsabilidad exclusiva de la persona
            que accede a ellos o los utiliza. Tampoco garantiza la disponibilidad
            continuada del sitio ni la ausencia de errores en sus contenidos,
            aunque procurará corregir cualquier incidencia de la que tenga
            conocimiento.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            6. Legislación aplicable
          </h2>
          <p>
            El presente aviso legal se rige por la legislación española. Para la
            resolución de conflictos, las partes se someten a los juzgados y
            tribunales competentes conforme a la normativa aplicable, sin
            perjuicio de los derechos que asisten a las personas consumidoras.
          </p>
        </section>
      </div>
    </div>
  );
}
