import TelaInicial from "../TelaIncial";
import SobreMim from "../../components/SobreMim";
import Projetos from "../../components/Projetos";
import Contato from "../Contato";


export default function Home() {
 return (
    <div className="min-h-screen">
        <TelaInicial />
        <SobreMim showMoreButton />
        <Projetos showMoreButton />
        <Contato />
    </div>
  )
}


