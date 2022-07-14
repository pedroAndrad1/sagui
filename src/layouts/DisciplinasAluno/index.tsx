import { useEffect, useRef } from "react";
import Divider from "../../components/Divider";
import AlunoDisciplinasTable from "./AlunoDisciplinasTable";
import styles from "./DisciplinasAluno.module.scss";

export default function DisciplinasAluno({ disciplinasCursadas, fluxograma }) {
  const domParser = new DOMParser();
  const svgFluxograma = domParser.parseFromString(
    fluxograma,
    "image/svg+xml"
  ).documentElement;
  //   console.log(
  //     domParser.parseFromString(fluxograma, "image/svg+xml").documentElement
  //   );

  const svg = useRef(null);
  useEffect(() => {
    if (svg.current) {
      svg.current.appendChild(svgFluxograma);
    }
  }, [svgFluxograma]);

  return (
    <section className={`${styles.wrapper}`}>
      <h2>Fluxograma</h2>
      <div className={styles.fluxograma} ref={svg}></div>
      <div className={styles.disciplinas}>
        <h2>Disciplinas cursadas</h2>
        <AlunoDisciplinasTable disciplinasCursadas={disciplinasCursadas} />
      </div>
    </section>
  );
}
