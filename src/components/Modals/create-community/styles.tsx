import styled from "styled-components";
import { colors } from "@/theme/variables/colors";
import { fontSizes, spacing } from "@/theme/variables/spacing";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 300px;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: ${spacing.md};
`;

export const ModalTitle = styled.h2`
  font-size: ${fontSizes.lg};
  margin-bottom: ${spacing.md};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: ${spacing.md};
`;

export const Label = styled.label`
  font-size: ${fontSizes.base};
  margin-bottom: 5px;
`;

export const InputItm = styled.input`
  width: 100%;
  padding: 10px;
  font-size: ${fontSizes.base};
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: ${fontSizes.base};
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;