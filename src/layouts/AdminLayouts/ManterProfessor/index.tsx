import { FormEvent, useState } from "react";
import Input from "../../../components/Input";
import Select from 'react-select';
import styles from './ManterProfessor.module.scss';
import { validateEmail } from "../../../customHooks/useValidateEmailDomain";
import { toast } from "react-toastify";

const PERIODOS_DATA = [
    {
        value: "2021.1",
        label: "2021.1",
    },
    {
        value: "2021.2",
        label: "2021.2",
    },
    {
        value: "2022.1",
        label: "2022.1",
    },
    {
        value: "2022.2",
        label: "2022.2",
    },
]



interface ManterProfessorProps {
    type: 'EDITAR' | 'SALVAR'
}

const ManterProfessor = ({ type }: ManterProfessorProps) => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [periodos, setPeriodos] = useState<any>();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!validateEmail(email)){
            toast.error("Só são aceitos emails com domínio uniriotec.br ou edu.unirio.br!");
            return;
        }

        const periodosTratados = periodos.map((periodo) =>{
            return periodo.value;
        })

        console.log({
            nome,
            email,
            periodos: periodosTratados
        })

    };

    return (
        <section className={styles.wrapper}>
            {
                type == 'EDITAR' ?
                    <h1>Edição de Tutor</h1>
                    :
                    <h1>Cadastro de Tutor</h1>
            }
            <form onSubmit={(e) => onSubmit(e)}>
                <Input
                    name="Nome"
                    placeholder="Digite o nome do tutor"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                ></Input>
                <Input
                    name="Email"
                    placeholder="Digite o email do tutor"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                ></Input>
                <div className={styles.select}>
                    <Select
                        isMulti
                        name="periodos"
                        options={PERIODOS_DATA}
                        onChange={(e) => setPeriodos(e)}
                        isSearchable={true}
                        isClearable={true}
                        placeholder="Escolha um período"
                        noOptionsMessage={(parametroPedidoSemUso) =>
                            "Não há períodos cadatrados. Cadastre um período antes, por favor."
                        }
                    ></Select>
                </div>
                <button className={styles.button} type="submit">Salvar</button>
            </form>
        </section>
    )
}
export default ManterProfessor;
