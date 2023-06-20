import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 4rem;
    max-height: 4rem;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: var(--bgmain2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--bgmain2);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-400);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    padding-left: 30vw;
    padding-right: 30vw;
    background: var(--bgmain);
    color: var(--grey-200);
  }
  /* .nav-link:hover .icon {
    color: var(--primary-500);
  } */
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    padding-left: 30vw;
    padding-right: 30vw;
    color: var(--white);
    background: var(--bgmain);
  }
  .active .icon {
    color: var(--primary-500);
  }
`;
export default Wrapper;
