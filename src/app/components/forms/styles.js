import styled from "styled-components";
import { CloudArrowDownFill } from "@styled-icons/bootstrap/CloudArrowDownFill";

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

export const FormHeader = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 40px;
  & > h1 {
    line-height: 1.66;
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #333333;
    font-family: Poppins;
    font-size: 36px;
  }
  & > h3 {
    line-height: 1.66;
    font-weight: 400;
    color: #6dabe4;
    font-family: Poppins;
    font-size: 14px;
    max-width: 300px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  margin-top: 20px;
  width: 100%;
  & > button {
    display: inline-block;
    background: #6dabe4;
    color: #fff;
    border: none;
    width: auto;
    padding: 15px 39px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    cursor: pointer;
    &:hover {
      cursor: pointer;
      background: #45a6ff;
    }
  }
  & > button:nth-child(2) {
    margin-left: 10px;
    background: #45a6ff;
  }
  & > p {
    font-size: 14px;
    & > a {
      color: #24a8f3;
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const ErrorContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin: 0px;
  list-style: none;
  color: red;
  & > li {
    font-size: 14px;
    color: red;
  }
`;

export const FormComplete = styled.div`
  width: 80%;
  max-width: 1200px;
  background: #fff;
  margin: 20px auto;
  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  @media (max-width: 575px) {
    padding: 0 30px 30px 30px;
  }
`;

export const FormGroupInline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const InputGroupComplete = styled.div`
  margin-bottom: 15px;
  margin-right: 20px;
  & > label {
    color: #222;
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  & > input {
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid #999;
    padding: 6px 10px 6px 0;
    font-family: Poppins;
    box-sizing: border-box;
    min-width: 250px;
    &:focus {
      border-bottom: 1px solid #071637;
      outline: none;
    }
  }

  & > textarea {
    width: 100%;
    height: 100px;
    display: block;
    border: none;
    border-bottom: 1px solid #999;
    padding: 6px 10px 6px 0;
    font-family: Poppins;
    box-sizing: border-box;
    resize: vertical;
    &:focus {
      border-bottom: 1px solid #071637;
      outline: none;
    }
  }
`;

export const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  & > label {
    color: #222;
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  & > span {
    color: #222;
    font-size: 10px;
    margin-top: 4px;
    max-width: 80%;
    align-self: flex-end;
    line-height: 14px;
  }
`;

export const DropzoneArea = styled.div`
  max-width: 250px;
  border: 1px dashed #ccc;
  padding: 50px 30px;
  color: #333333;
  background: #f8f8f8;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 1px dashed #222;
  }
`;

export const ImagePreviewContainer = styled.div`
  max-height: 260px;
  width: 150px;
  overflow: hidden;
  margin-left: 15px;
  & > img {
    width: 100%;
  }
`;

export const DropIcon = styled(CloudArrowDownFill)`
  height: 28px;
  fill: #333333;
`;
