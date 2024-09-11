import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`

export const BackButton = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

width: fit-content;

gap: .4rem;
padding: .8rem;
margin-top: 3.2rem;

font-size: 1.4rem;

border-radius: .8rem;

background: var(--color-gray-600);
color: var(--color-white);
`

export const Owner = styled.header`
display: flex;
align-items: center;
justify-content: flex-start;

gap: 1.6rem;
padding: 1.6rem;
margin-top: 1.6rem;

border-radius: .8rem;

background: var(--color-gray-600);

img {
  width: 6.4rem;
  height: 6.4rem;
  border: 0.1rem solid var(--color-gray-100);
  border-radius: .8rem;
  background: var(--color-white);
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:.8rem;

  h1 {
    font-size: 3.2rem;
    color: var(--color-white);
  }

  p {
    font-size: 1.6rem;
    color: var(--color-white);
  }
}
`

export const IssuesList = styled.div`
margin: 3.2rem 0;
padding: 1.6rem;

li {
  display: flex;
align-items: center;
justify-content: flex-start;

gap: 1.6rem;
padding: 1.6rem 0;
margin-top: 1.6rem;

border-radius: .8rem;

background: transparent;

  img {
  width: 6.4rem;
  height: 6.4rem;
  border: 0.1rem solid var(--color-gray-100);
  border-radius: 50%;
  background: var(--color-white);
}

h4 {
  font-weight: 600;
  margin-bottom: .4rem;
}

h3 {
  span {    
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: .4rem;
  }
  margin-bottom: .4rem;
}


  a {
    font-size: 1.4rem;
    &:hover {
      color: var(--color-primary);
    }
  }

  p {
    display: flex;
    flex-direction: column;
    span {
      font-size: 1.4rem;
    }
  }

  & + li {
  border-top: 0.1rem solid var(--color-gray-100);
}
}

`