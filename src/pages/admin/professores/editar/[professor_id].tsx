import ManterProfessor from "../../../../layouts/AdminLayouts/ManterProfessor";
import AppLayout from "../../../../layouts/AppLayout";

export default function EdicaoProfessores({ }) {
    return (
        <AppLayout>
            <ManterProfessor type='EDITAR'></ManterProfessor>
        </AppLayout>
    )
}