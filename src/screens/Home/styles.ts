import styled from "styled-components/native";


export const Container = styled.View`
 flex: 1;
 padding-left:20px;
 padding-right: 20px;
 background-color:${({ theme }) => theme.colors.gray900};
 padding-top: 75px;
`;

export const TitleEvento = styled.Text`
 color: ${props => props.theme.colors.gray300};
  font-size: ${props => props.theme.size.lg};
  font-family: ${props => props.theme.fonts.bold};
`;

export const DateEvento = styled.Text`
  color: ${props => props.theme.colors.gray500};
  font-size: ${props => props.theme.size.xm};
  font-family: ${props => props.theme.fonts.regular};
  line-height: 16px;
  margin-top: 8px;
`;

export const FormEvento = styled.View` 
flex-direction:row;
    gap: 8px;
    margin-top: 44px;
    align-items: center;
`;

export const ParticipantsTitle = styled.Text`
color: ${props => props.theme.colors.gray300};
  font-size: ${props => props.theme.size.lg};
  font-family: ${props => props.theme.fonts.bold};
  margin-top: 36px;
`;
export const ContainerListParticipant = styled.View`
  margin-top: 24px;
  margin-bottom:24px;
`;

export const ListEmpty = styled.Text`
color: ${props => props.theme.colors.gray300};
  font-size: ${props => props.theme.size.xm};
  font-family: ${props => props.theme.fonts.regular};
  text-align: center;
    line-height: 20px;
`;