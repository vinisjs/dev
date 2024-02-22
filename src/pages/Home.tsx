import { Button } from "../components/atoms/Button";
import { Card } from "../components/atoms/Card";
import { Container } from "../components/molecules/Container";

export function Home() {
  return (
    <div className="space-y-4">
      <Card
        title="Bem-Vindo(a)"
        content={`
          Este é o sistema Saturno, um sistema de gerenciamento criado a fim de facilitar a busca e lançamentos no sistema principal: Alelo.
        `}
      />
      <h2 className="text-xl font-bold border-b-2 border-zinc-500">Seções</h2>
      <Container>
        <Card
          title="Animal"
          content="Seção para gerenciamento de animais, onde é possível cadastrar, editar e excluir animais."
        >
          <Button to="/dashboard/animal" label="Animal" ></Button>
        </Card>
        <Card
          title="Report"
          content="Seção para gerenciamento de relatórios, onde é possível visualizar, editar e excluir relatórios. Além de poder gerar novos relatórios e exportar para PDF ou CSV."
        >
          <Button to="/dashboard/reports" label="Reports" ></Button>
        </Card>
        <Card
          title="Settings"
          content="Seção para gerenciamento de configurações, onde é possível editar as configurações do usuário. Como por exemplo: senha, e-mail, nome, etc. Além de poder gerenciar as configurações do sistema."
        >
          <Button to="/dashboard/settings" label="Settings" ></Button>
        </Card>
      </Container>

    </div>
  )
}
