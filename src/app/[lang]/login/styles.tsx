import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const PasswordField = styled(InputField)`
  /* You can add specific styles for the password field if needed */
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SignupButton = styled(SubmitButton)`
  margin-top: 10px;
  background-color: #28a745;
  
  &:hover {
    background-color: #218838;
  }
`;

export const LeadPara = styled.p`
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
    color: #666;
`;
