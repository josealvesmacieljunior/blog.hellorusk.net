import Link from "next/link";
import { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const Main = () => {
  const [num, setNum] = useState(0);

  const idList = ["About", "Links"];
  const buttonType = ["button", "button2"];
  const buttonElements: JSX.Element[] = [];

  idList.forEach((v, iter) => {
    buttonElements.push(
      <div
        key={v}
        className={buttonType[(num + iter) % 2]}
        onClick={() => setNum(iter)}
      >
        {v}
      </div>
    );
  });

  return (
    <>
      <GlobalButtonStyle />
      <ButtonContainer>{buttonElements}</ButtonContainer>
      <Info>{renderInfo(num)}</Info>
    </>
  );
};

const renderInfo = (num: number) => {
  const elements = [
    <About>
      <ul>
        <li>
          <Link href="https://hellorusk.net/fixed/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="https://hellorusk.net/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </About>,
    <Links>
      <ul>
        <li>
          <a href="https://github.com/7ma7X" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://keybase.io/hellorusk" target="_blank">
            Keybase
          </a>
        </li>
        <li>
          <a href="https://twitter.com/hellorusk" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.last.fm/ja/user/HelloRusk" target="_blank">
            Last.fm
          </a>
        </li>
        <li>
          <a href="https://bookmeter.com/users/849928" target="_blank">
            Book Meter
          </a>
        </li>
        <li>
          <a href="https://yamap.com/users/1227557" target="_blank">
            YAMAP
          </a>
        </li>
      </ul>
    </Links>
  ];

  return elements[num];
};

export default Main;

const About = styled.div`
  display: inline-block;
  font-size: 1.2em;
  text-align: left;
  animation: fadein 0.2s linear;

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translate3d(0, 5px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  & ul {
    margin: 0 40px 0 0;
    list-style-type: none;
    padding-inline-start: 2em;
  }
`;

const Links = styled.div`
  display: inline-block;
  text-align: left;
  animation: fadein 0.2s linear;

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translate3d(0, 5px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  & ul {
    margin: 0 40px 0 0;
    list-style-type: none;
    padding-inline-start: 2.5em;
  }

  & li {
    font-size: 1em;
  }
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  padding-top: 15px;
  text-align: center;

  @media screen and (min-width: 501px) {
    min-width: 500px;
    width: 50%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Info = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  height: 235px;
`;

const GlobalButtonStyle = () => (
  <Global
    styles={css`
      .button,
      .button2 {
        font-size: 1.1em;
        display: inline-block;
        width: 30%;
        margin: 0 10px;
        padding: 5px 0;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
      }

      .button {
        background-color: #000000;
        color: #ffffff;
      }

      .button2 {
        background-color: #ffffff;
        color: #000000;
        transition: 0.4s;
      }

      .button2:hover {
        background-color: #000000;
        color: #ffffff;
      }
    `}
  />
);
