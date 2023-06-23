import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--bgmain2);
  margin-top: 4rem;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  button {
    cursor: pointer;
    color: var(--white);
    background: var(--primary-700);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default Wrapper;
