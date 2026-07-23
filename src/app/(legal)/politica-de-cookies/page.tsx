export const metadata = { title: "Política de cookies" };

export default function PoliticaDeCookies() {
  return (
    <div className="container-page section max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">
        Política de cookies
      </h1>

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
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web
            almacenan en el dispositivo del usuario (ordenador, tableta o
            teléfono) cuando los visita. Permiten que el sitio recuerde
            información sobre la visita, facilitan la navegación y ayudan a
            analizar cómo se utiliza el sitio. Esta política se emite conforme al
            artículo 22.2 de la LSSI-CE y la normativa de protección de datos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            2. Tipos de cookies que utilizamos
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Cookies técnicas o necesarias:</strong> imprescindibles
              para el funcionamiento del sitio y para prestar los servicios
              solicitados, como gestionar el carrito de la compra, iniciar sesión
              o recordar preferencias básicas. No requieren consentimiento.
            </li>
            <li>
              <strong>Cookies de preferencias o personalización:</strong>
              permiten recordar información para que el usuario acceda al servicio
              con determinadas características, como el idioma.
            </li>
            <li>
              <strong>Cookies analíticas o de medición:</strong> permiten
              cuantificar el número de usuarios y analizar de forma anónima o
              agregada la navegación para mejorar el sitio y nuestros productos.
            </li>
            <li>
              <strong>Cookies de marketing o publicidad:</strong> se utilizan
              para gestionar la publicidad y mostrar contenido relevante en
              función de los hábitos de navegación, si procede.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            3. Cookies propias y de terceros
          </h2>
          <p>
            Utilizamos cookies propias, gestionadas por el titular del sitio, y
            cookies de terceros, gestionadas por proveedores externos (por
            ejemplo, herramientas de analítica web, pasarela de pago o servicios
            de contenido incrustado). Estos terceros pueden tratar los datos
            conforme a sus propias políticas.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            4. Consentimiento
          </h2>
          <p>
            Al acceder al sitio, se le solicitará su consentimiento para el uso
            de cookies no esenciales. Podrá aceptarlas, rechazarlas o
            configurarlas. Las cookies técnicas necesarias se instalan sin
            requerir consentimiento por ser imprescindibles para el
            funcionamiento del sitio. Puede modificar o retirar su consentimiento
            en cualquier momento.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            5. Gestión y desactivación de cookies
          </h2>
          <p>
            Puede permitir, bloquear o eliminar las cookies instaladas
            configurando las opciones de su navegador. A continuación se indican
            los enlaces de ayuda de los navegadores más comunes:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Microsoft Edge</li>
            <li>Safari</li>
          </ul>
          <p className="mt-2">
            Tenga en cuenta que la desactivación de determinadas cookies puede
            afectar al correcto funcionamiento de algunas partes del sitio.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">
            6. Actualizaciones
          </h2>
          <p>
            Esta política de cookies puede actualizarse en función de cambios
            normativos o técnicos. Le recomendamos revisarla periódicamente. Para
            cualquier duda, puede escribirnos a{" "}
            <a className="underline" href="mailto:sara@eatanybug.com">
              sara@eatanybug.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
