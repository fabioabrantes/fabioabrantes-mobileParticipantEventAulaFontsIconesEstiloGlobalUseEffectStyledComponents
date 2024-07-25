import { useState } from "react";
import { Alert, Text, View } from "react-native";

import { Botao } from "../../components/Botao";
import { Participant } from "../../components/Participant";
import {
  Container,
  TitleEvento,
  DateEvento,
  FormEvento,
  ListEmpty,
  ParticipantsTitle,
  ContainerListParticipant
} from "./styles";
import { Input } from "../../components/Input";

export function Home() {
  const [nameParticipant, setNameParticipant] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipant(nome: string) {
    setNameParticipant(nome);
    console.log(nameParticipant)
  }
  
  function addParticipant() {
    if (participants.includes(nameParticipant) || nameParticipant === '') {
      Alert.alert('Error', 'Participante ja existe ou não foi digitado');
    } else {
      setParticipants([...participants, nameParticipant]);
    }
    setNameParticipant('');
  }
  function removeParticipant(name: string) {
    if (participants.length > 0) {
      const novArray = participants.filter((participantName) => participantName !== name);
      setParticipants(novArray);
    }
  }
  return (
    <Container>
      <TitleEvento>Sertao Comp</TitleEvento>
      <DateEvento>Sexta, 4 de Novembro de 2022.</DateEvento>

      <FormEvento>
        <Input
          namePlaceholder="digite o nome"
          value={nameParticipant}
          onChangeText={(text) => handleParticipant(text)}
        />

        <Botao
          cor="green"
          iconName="user-plus"
          metodo={addParticipant}
        />
      </FormEvento>

      <ParticipantsTitle>Participantes</ParticipantsTitle>

      <ContainerListParticipant>

        {
          participants.length === 0 ?
            (
              <ListEmpty>Ninguém chegou no evento ainda?
                Adicione participantes a sua lista de presença.</ListEmpty>
            )
            :
            (
              participants.map((nameParticipant) =>
                <Participant
                  name={nameParticipant}
                  key={nameParticipant + Date.now()}
                  metodo={() => removeParticipant(nameParticipant)}
                />

              )
            )
        }
      </ContainerListParticipant>
    </Container>
  )
}