import styled from "styled-components";
import EstiloGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Destaque from "./components/Destaque";
import Galeria from "./components/Galeria";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";
import database from "../db.json"

const AppConteiner = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
  font-family: GandhiSansRegular;
`

const MainStyled = styled.main`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const FundoGradiente = styled.div`
  background: linear-gradient(180deg, #041833, #04244F, #154580);
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`


function App() {

  const [fotosGaleria, setFotosGaleria] = useState();
  const [backup, setBackup] = useState([]);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [busca, setBusca] = useState("");
  const [tags, setTags] = useState(database.tags);

  useEffect(() => {
    setTags(database.tags);
  }, []);

  const onChangeFavorite = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorito: !fotoSelecionada.favorito
      })
    }

    setFotosGaleria(fotosGaleria.map(fotoDaGaleria => {
      return{
        ...fotoDaGaleria,
        favorito: fotoDaGaleria.id === foto.id ? !foto.favorito : fotoDaGaleria.favorito
      }
    }))
  }

  const onChangeTag = (tagId) => {
    if(tagId === 0){
      setFotosGaleria(backup);
      setTags(tags.map(tag => {
        return{
          ...tag,
          selected: tag.id == 0 ? true : false
        }
      }))
      return;
    }
    setFotosGaleria(backup.filter(foto => foto.tagId == tagId));
    setTags(tags.map(tag => {
      return{
        ...tag,
        selected: tag.id === tagId ? true : false
      }
    })) 
  }

  useEffect(() => {
    let fotos = database.fotos;
    if (busca.length > 3) {
      const fotosFiltradas = fotos.filter(foto =>
        foto.titulo.toLowerCase().includes(busca.toLowerCase())
      );
      setFotosGaleria(fotosFiltradas);
      return;
    }
    setFotosGaleria(fotos);
    setBackup(fotos);
  }, [busca]);
  

  return (
    <FundoGradiente>
      <AppConteiner>
        <EstiloGlobais />
        <Cabecalho busca={setBusca} /> 
        <MainStyled>
          <BarraLateral />
          <ConteudoGaleria>
            <Destaque />
            <Galeria
              tags={tags}
              onChangeTag={onChangeTag}
              onChangeFavorite={onChangeFavorite}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosGaleria} />
          </ConteudoGaleria>
        </MainStyled>
      </AppConteiner>
      <Footer />
      <ModalZoom foto={fotoSelecionada} onChangeFavorite={onChangeFavorite} aoFotoSelecionada={(foto) => setFotoSelecionada(foto)} />
    </FundoGradiente>
  )
}

export default App
