import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import styles from './ManterTutoria.module.scss';
import Select from 'react-select';

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

const TUTORES_DATA = [
    {
        value: "NOME DO TUTOR",
        label: "NOME DO TUTOR",
    },
]


interface ManterTutoriaProps {
    type: 'EDITAR' | 'SALVAR';
    tutoresData?: any;
}

const ManterTutoria = ({ type, tutoresData }: ManterTutoriaProps) => {

    const [periodos, setPeriodos] = useState<any>([]);
    const [tutor, setTutor] = useState<any>();
    

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(tutor)

        if (periodos.length == 0 || tutor == undefined) {
            toast.error("Todos os campos são obrigatórios!");
            return;
        }

        const periodosTratados = periodos.map((periodo) => {
            return periodo.value;
        })
        const tutorTratado = tutor.value;

        console.log({
            periodos: periodosTratados,
            tutor: tutorTratado
        })
    };

    return (
        <section className={styles.wrapper}>
            {
                type == 'EDITAR' ?
                    <h1>Edição de Tutoria</h1>
                    :
                    <h1>Cadastro de Tutoria</h1>
            }
            <form onSubmit={(e) => onSubmit(e)}>
                <Select
                    id="periodos"
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

                <Select
                    id="tutores"
                    name="professores"
                    options={TUTORES_DATA}
                    onChange={(e) => setTutor(e)}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Escolha um tutor"
                    noOptionsMessage={(parametroPedidoSemUso) =>
                        "Não há tutores cadatrados. Cadastre um tutor antes, por favor."
                    }
                ></Select>
                <button className={styles.button} type="submit">Salvar</button>
            </form>
        </section>
    )
}
export default ManterTutoria;
