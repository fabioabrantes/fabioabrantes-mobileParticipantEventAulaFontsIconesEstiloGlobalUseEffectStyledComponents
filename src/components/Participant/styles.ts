import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
`;

export const NameParticipant = styled.Text`
    font-size: ${props=>props.theme.size.xm};
    color: ${props=>props.theme.colors.gray300};
    font-family: ${props=>props.theme.fonts.bold};
    margin-left: 16px;
    text-align:center;
`;

export const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-left: 24px;
    padding-right: 24px;
    background-color: rgba(20, 20, 20, 0.8);
`;

export const ModalWrapper = styled.View`
    background-color: ${props=>props.theme.colors.white};
    padding: 24px;
    border-radius: 8px;
    align-items: center;
`;

export const ModalTitle = styled.Text`
    font-size: ${props=>props.theme.size.sm};
    color: ${props=>props.theme.colors.gray900};
    font-family: ${props=>props.theme.fonts.bold};
    text-align: center;
`;

export const ModalSubTitle = styled.Text`
    font-size: ${props=>props.theme.size.xm};
    color: ${props=>props.theme.colors.gray600};
    font-family: ${props=>props.theme.fonts.regular};
    text-align: center;
`;

export const ModalButtonInteraction = styled.View`
    flex-direction: row;
    gap: 8px;
    margin-top: 20px;
    width: 100%;
`;
