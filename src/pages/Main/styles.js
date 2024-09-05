import styled, {keyframes, css} from "styled-components";

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
background: var(--color-black);
height: 8rem;

margin-bottom: 3.2rem;

nav {
  ul {
    li {
      a {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        color: var(--color-white);
        font-size:2.4rem;     
      }
    }
  }
}
`;

export const Form = styled.form`

display: flex;
align-items: center;
justify-content: center;
gap: 1.6rem;

input {
  width: 100%;
  padding: 1.6rem;
  border: 0.1rem solid var(--color-gray-100);
  border-radius: .8rem;
  outline: none;
}
`;

//Animation Button
const animate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
  }))`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.85rem;
  border: 0.1rem solid var(--color-gray-100);
  border-radius: .8rem;

  &[disabled] {
    cursor: not-allowed;
    opacity: .5;
  }

  ${props => props.loading &&
  css`
    svg{
      animation: ${animate} 2s linear infinite;
    }
  `
  }
`;

export const List = styled.ul`
margin-top: 3.2rem;

li{
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  padding: 3.2rem 0;

  & + li {
    border-top: 0.1rem solid var(--color-gray-100);
  }
}
`;

export const DeleteButton = styled.button.attrs({
  type:'button'
})`
margin-right: .8rem;
`;