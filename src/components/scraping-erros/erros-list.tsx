import { AccordionError } from "./accordion-error";

const issuesList = [
  {
    Id: "err-001",
    Reason: "Timeout ao tentar acessar a página de produtos",
    At: "Kabum",
    When: "2025-01-02 10:15:43",
  },
  {
    Id: "err-002",
    Reason: "Bloqueio por CAPTCHA detectado durante a coleta",
    At: "Terabyte",
    When: "2025-01-02 10:47:09",
  },
  {
    Id: "err-003",
    Reason: "Estrutura HTML alterada, seletor não encontrado",
    At: "Aliexpress",
    When: "2025-01-03 02:18:55",
  },
  {
    Id: "err-004",
    Reason: "Erro 403 – Acesso negado pelo servidor",
    At: "Pichau",
    When: "2025-01-03 11:06:21",
  },
  {
    Id: "err-005",
    Reason: "Resposta vazia da API de preços",
    At: "Kabum",
    When: "2025-01-04 09:32:10",
  },
];

export async function ErrosList() {
  return (
    <section className="flex flex-col gap-6 flex-1 pb-8">
      {issuesList.map((inssue) => (
        <AccordionError
          key={inssue.Id}
          errorName={inssue.Reason}
          errorCollectStore={inssue.At}
          errorId={inssue.Id}
          errorDate={inssue.When}
        />
      ))}
    </section>
  );
}
