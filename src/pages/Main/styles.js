import styled, {keyframes, css} from "styled-components";

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
background: var(--color-gray-600);
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
  outline: transparent;

  &.error {
    border: 0.1rem solid var(--color-red-200);
  }
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

const fadeRight = keyframes`
 from {
    opacity: 0;
    transform: translateX(5rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
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

  background: var(--color-gray-600);

  &[disabled] {
    cursor: not-allowed;
    opacity: .5;    
    background: var(--color-white);
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

p {    
    margin-top: .8rem;
    font-size: 1.4rem;
    color: var(--color-red-600);
    padding-left: 1.6rem;
  }
`;

export const DeleteButton = styled.button.attrs({
  type:'button'
})`
margin-right: .8rem;
`;

export const NotFoundError = styled.div`
display: none;
position: absolute;
bottom: 1.6rem;
right:0;
padding: .8rem;

background: var(--color-red-700);
border-radius: .8rem;
border: 0.1rem solid var(--color-red-200);

transition: all .2s;
&.error {
  display: block;
  margin-top: .8rem;
    span {    
      font-size: 1.4rem;
      color: var(--color-white);
    }
    animation: ${fadeRight} .2s linear;
}
`;


export const EmptyError = styled.div`
display: none;
position: absolute;
bottom: 1.6rem;
right:0;
padding: .8rem;

background: var(--color-red-700);
border-radius: .8rem;
border: 0.1rem solid var(--color-red-200);

transition: all .2s;
&.error {
  display: block;
  margin-top: .8rem;
    span {    
      font-size: 1.4rem;
      color: var(--color-white);
    }
    animation: ${fadeRight} .2s linear;
}
`;

export const EqualError = styled.div`
display: none;
position: absolute;
bottom: 1.6rem;
right:0;
padding: .8rem;

background: var(--color-red-700);
border-radius: .8rem;
border: 0.1rem solid var(--color-red-200);

transition: all .2s;
&.error {
  display: block;
  margin-top: .8rem;
    span {    
      font-size: 1.4rem;
      color: var(--color-white);
    }
    animation: ${fadeRight} .2s linear;
}
`;