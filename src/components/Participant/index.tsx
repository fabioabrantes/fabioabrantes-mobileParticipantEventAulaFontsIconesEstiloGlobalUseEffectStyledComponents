import { useState } from "react";
import { Modal, Text, View } from "react-native";
import { Botao } from "../Botao";

import {
  Container,
  ModalButtonInteraction,
  ModalContainer,
  ModalSubTitle,
  ModalTitle,
  ModalWrapper,
  NameParticipant
} from "./styles";

import { ButtonModal } from "./components/ButtonModal";

type PropsParticipant = {
  name: string;
  metodo: (name: string) => void;
}
export function Participant({ name, metodo }: PropsParticipant) {
  const [modalVisibility, setModalVisibility] = useState(false);

  function remover() {
    setModalVisibility(false);
    metodo(name);
  }

  return (
    <Container>
      <NameParticipant>{name}</NameParticipant>

      <Botao cor="red" iconName="trash-o" metodo={() => setModalVisibility(true)} />

      <Modal
        visible={modalVisibility}
        transparent
        statusBarTranslucent
        animationType="slide"
      >
        <ModalContainer>
          <ModalWrapper>

            <ModalTitle>Remover</ModalTitle>

            <ModalSubTitle>Deseja excluir {name}?</ModalSubTitle>

            <ModalButtonInteraction>
              <ButtonModal
                title="Não"
                metodo={() => setModalVisibility(false)}

              />

              <ButtonModal
                title="Sim"
                metodo={remover}
              />
            </ModalButtonInteraction>
          </ModalWrapper>
        </ModalContainer>

      </Modal>
    </Container>
  )
}