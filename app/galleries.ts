// Fotos de cada projeto. Para acrescentar uma tela, coloque a imagem em public/work/<projeto>/
// e adicione uma linha aqui. A primeira foto é a principal; as quatro seguintes viram miniaturas;
// todas aparecem na galeria em tela cheia.
export type Shot = { src: string; caption: string; mobile?: boolean };

const w = (dir: string, file: string, caption: string, mobile = false): Shot => ({
  src: `/work/${dir}/${file}`,
  caption,
  mobile,
});

export const galleries = {
  "lf-workspace": [
    w("lf-workspace", "01-dashboard.png", "Dashboard"),
    w("lf-workspace", "03-my-work.png", "My Work · Kanban"),
    w("lf-workspace", "04-sprints.png", "Sprints"),
    w("lf-workspace", "09-finance.png", "Finance"),
    w("lf-workspace", "13-reports.png", "Reports"),
    w("lf-workspace", "02-today.png", "Today · Daily e End of Day"),
    w("lf-workspace", "05-projects.png", "Projects"),
    w("lf-workspace", "06-time-tracking.png", "Time Tracking"),
    w("lf-workspace", "07-clients.png", "Clients"),
    w("lf-workspace", "08-crm.png", "CRM"),
    w("lf-workspace", "10-applications.png", "Applications"),
    w("lf-workspace", "11-learning.png", "Learning · Skill Matrix"),
    w("lf-workspace", "12-achievements.png", "Achievements"),
    w("lf-workspace", "14-settings.png", "Settings"),
  ],
  "lf-business": [
    w("lf-business", "01-visao-geral.webp", "Visão geral com retornos agendados"),
    w("lf-business", "02-orcamentos.webp", "Orçamentos"),
    w("lf-business", "03-proposta.webp", "Proposta"),
    w("lf-business", "04-prospeccao.webp", "Prospecção"),
    w("lf-business", "05-tema-escuro.webp", "Tema escuro"),
    w("lf-business", "08-checklists.webp", "Checklists"),
    w("lf-business", "09-seus-dados.webp", "Perfil, tema e backup"),
    w("lf-business", "06-celular.webp", "No celular", true),
    w("lf-business", "07-celular-proposta.webp", "Proposta no celular", true),
  ],
  pethelp: [
    w("pethelp", "tutor-01-inicio.webp", "Tutor · Meus pets"),
    w("pethelp", "tutor-03-prontuario.webp", "Tutor · Prontuário"),
    w("pethelp", "clinica-01-inicio.webp", "Clínica · Dashboard"),
    w("pethelp", "clinica-02-agenda.webp", "Clínica · Agenda"),
    w("pethelp", "vet-01-inicio.webp", "Veterinário · Dashboard"),
    w("pethelp", "00-login.webp", "Entrada com três perfis"),
    w("pethelp", "tutor-02-perfil-do-pet.webp", "Tutor · Perfil do pet"),
    w("pethelp", "tutor-05-agenda.webp", "Tutor · Agenda de consultas"),
    w("pethelp", "tutor-06-compartilhamentos.webp", "Tutor · Vet-Pass e compartilhamentos"),
    w("pethelp", "clinica-03-veterinarios.webp", "Clínica · Gestão de veterinários"),
    w("pethelp", "clinica-04-pacientes.webp", "Clínica · Pets cadastrados"),
    w("pethelp", "vet-02-agenda.webp", "Veterinário · Agenda"),
    w("pethelp", "tutor-celular-inicio.webp", "Tutor no celular", true),
  ],
  "mary-bless": [
    w("mary-bless", "01-inicio.webp", "Página inicial"),
    w("mary-bless", "02-inicio-rolagem.webp", "Vitrine de produtos"),
    w("mary-bless", "03-produtos.webp", "Catálogo com filtros"),
    w("mary-bless", "04-celular.webp", "Loja no celular", true),
  ],
  revolve: [
    w("revolve", "01-inicio.webp", "Apresentação do produto"),
    w("revolve", "02-rolagem.webp", "Como funciona"),
    w("revolve", "03-rolagem-2.webp", "Depoimento e novidades"),
    w("revolve", "04-celular.webp", "Versão para celular", true),
  ],
  "aroma-beans": [
    w("aroma-beans", "02-conversa.webp", "Conversa com o assistente"),
    w("aroma-beans", "03-celular.webp", "Assistente no celular", true),
  ],
} satisfies Record<string, Shot[]>;

export type GalleryId = keyof typeof galleries;

export const galleryTitles: Record<GalleryId, string> = {
  "lf-workspace": "LF Workspace",
  "lf-business": "LF Business",
  pethelp: "PetHelp",
  "mary-bless": "Mary Bless",
  revolve: "Revolve Global",
  "aroma-beans": "Aroma Beans",
};
