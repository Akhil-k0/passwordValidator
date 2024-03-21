// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PasswordDetailsCard = styled.div`
  background-color: #383a4e;
  height: 270px;
  width: 90%;
  max-width: 360px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    height: 225px;
    border-radius: 10px;
  }
`

export const PasswordDetailsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 34px;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 18px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #f8fafc;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: 16px;
    text-align: center;
  }
`

export const PasswordInput = styled.input`
  background-color: #edeeff;
  margin-top: 30px;
  width: 78%;
  height: 30px;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 21px;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    width: 90%;
  }
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #ef4444;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
