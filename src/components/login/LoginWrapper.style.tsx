import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  background-color: #e7f1fd;
  min-height: 100vh;
  padding: 20px;
`;

export const LoginTextField = styled(TextField)<{ noIcon?: boolean }>`
  & .MuiInputBase-root {
    border: 1px solid #c7c7c7 !important;
  }

  & .MuiInputBase-input {
    color: #000;
    font-size: 14px;
    padding: 14px 16px;
    padding-left: ${(props) => (props.noIcon ? "14px" : "0px")};
  }

  & .MuiInputBase-input::placeholder {
    color: #c7c7c7 !important;
    opacity: 1 !important;
    font-size: 14px !important;
  }

  & .MuiInputAdornment-root {
    color: #000 !important;
    padding: 10px;
    height: 100%;
  }

  & .MuiInputAdornment-positionStart {
    margin-right: 0;
  }
`;
export const LoginLink = styled(Typography)<{ underline?: string; color?: string }>`
  display: inline-block;
  text-decoration: ${(props) => (props.underline === "true" ? "underline" : "none")};
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : "#3f53d9")};
`;
