import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const BackButton = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

width: 10rem;

gap: .4rem;
padding: .8rem;
margin-top: 3.2rem;

border-radius: .8rem;
border: 0.1rem solid var(--color-white);

background: var(--color-gray-600);
color: var(--color-white);

transition: all .2s;

svg {
  transition: all .2s;
}

&:hover {    
  color: var(--color-gray-600);
  background: var(--color-white);
  border: 0.1rem solid var(--color-gray-600);
  padding: .8rem;
  border-radius: .8rem;

  svg {
    display: none;
  }
}
`;

export const Owner = styled.header`
display: flex;
align-items: center;
justify-content: flex-start;

gap: 1.6rem;
padding: 1.6rem;
margin-top: 3.2rem;

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
`;

export const IssuesList = styled.div`
margin: 3.2rem 0;

li {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 1.6rem;
  padding: 1.6rem 0;
  margin-top: 1.6rem;

  background: transparent;

  img {
  width: 6.4rem;
  height: 6.4rem;
  border: 0.1rem solid var(--color-gray-100);
  border-radius: 50%;
  background: var(--color-white);
}

h3 {
  font-weight: 600;
  margin-bottom: .4rem;
}

h4 {
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
    align-items: center;
    gap: .4rem;

    font-size: 1.4rem;
    font-weight: 600;
    span {
      font-size: 1.4rem;
      color: var(--color-white);
      background: var(--color-gray);
      padding: .4rem;
      border-radius: .4rem;
    }
  }

  & + li {
  border-top: 0.1rem solid var(--color-gray-100);
}
}

`;

export const PageActions = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 10rem;

  gap: .4rem;
  padding: .8rem;

  border-radius: .8rem;
  border: 0.1rem solid var(--color-white);

  background: var(--color-gray-600);
  color: var(--color-white);

  transition: all .2s;

  svg {
    transition: all .2s;
  }

  &:hover {    
    color: var(--color-gray-600);
    background: var(--color-white);
    border: 0.1rem solid var(--color-gray-600);
    padding: .8rem;
    border-radius: .8rem;

    svg {
      display: none;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      border: 0.1rem solid var(--color-white);
      background: var(--color-gray-600);
      color: var(--color-white);
      svg {
        display: block;
      }
    }
  }
}

`;

export const FilterList = styled.div`
  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;

  button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 10rem;

  gap: .4rem;
  padding: .8rem;

  border-radius: .8rem;
  border: 0.1rem solid var(--color-white);

  background: var(--color-gray-600);
  color: var(--color-white);

  transition: all .2s;

  svg {
    transition: all .2s;
  }

  &:hover {    
    color: var(--color-gray-600);
    background: var(--color-white);
    border: 0.1rem solid var(--color-gray-600);
    padding: .8rem;
    border-radius: .8rem;

    svg {
      display: none;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      border: 0.1rem solid var(--color-white);
      background: var(--color-gray-600);
      color: var(--color-white);
      svg {
        display: block;
      }
    }
  }
}
`;