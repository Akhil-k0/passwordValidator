// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  PasswordDetailsCard,
  PasswordDetailsContainer,
  Title,
  Description,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [isCharactersLesser, setCharacter] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const getPassword = event => {
    const password = event.target.value
    setInputValue(password)

    if (password.length > 8) {
      setCharacter(false)
    } else {
      setCharacter(true)
    }
  }
  return (
    <BgContainer>
      <PasswordDetailsCard>
        <PasswordDetailsContainer>
          <Title>Password Validator</Title>
          <Description>
            Check how strong and secure is your password
          </Description>
          <PasswordInput
            type="password"
            onChange={getPassword}
            value={inputValue}
          />
          {isCharactersLesser && (
            <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
          )}
        </PasswordDetailsContainer>
      </PasswordDetailsCard>
    </BgContainer>
  )
}

export default PasswordValidator
