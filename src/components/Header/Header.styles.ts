import styled from "styled-components";

export const HeaderStyles = styled.header`
  width: 100%;
  height: 10%;
  background: linear-gradient(
    180deg,
    #333333,
    #999400
  ); 
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);

  .nav {
    height: 100%;
    width: calc(100% - 48px);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav__logo {
    height: 75%;
  }

  .nav__logo-img {
    width: 100%;
    height: 100%;
  }

  .nav__link,
  .nav__logo,
  .nav__toggle,
  .nav__close {
    color: var(--title-color);
  }

  .nav__toggle {
    font-size: 1.25rem;
    cursor: pointer;
  }


  @media screen and (max-width: 767px) {
    .nav__menu {
      position: fixed;
      width: 100%;
      background: var(--container-color);
      top: -150%;
      left: 0;
      padding: 3.5rem 0;
      transition: .4s;
      z-index: var(--z-fixed);
      border-radius: 0 0 1.5rem 1.5rem;
    }
  }

  

  .nav__close {
    font-size: 1.8rem;
    position: absolute;
    top: .5rem;
    right: .7rem;
    cursor: pointer;
  }

  .nav__list {
    display: flex;
    align-items: center;
    row-gap: 1.5rem;
  }

  .nav__link {
    text-transform: uppercase;
    font-weight: var(--font-black);
    transition: .4s;
  }

  .nav__link:hover {
    color: var(--text-color);
  }

  /* ---------------------------------------------- */

  .container {
    max-width: 968px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  .active-link {
    position: relative;
  }

  .active-link::before {
    content: '';
    position: absolute;
    bottom: -.75rem;
    left: 45%;
    width: 5px;
    height: 5px;
    background-color: var(--title-color);
    border-radius: 50%;
  }

  .button {
    display: inline-block;
    background-color: var(--first-color);
    color: var(--title-color);
    padding: 1rem 1.75rem;
    border-radius: .5rem;
    font-weight: var(--font-medium);
    transition: .3s;
  }

  .button:hover {
    background-color: var(--first-color-alt);
  }

  .button--ghost {
    border: 2px solid;
    background-color: transparent;
    border-radius: 3rem;
    padding: .75rem 1.5rem;
  }

  .button--ghost:hover {
    background: none;
  }
`