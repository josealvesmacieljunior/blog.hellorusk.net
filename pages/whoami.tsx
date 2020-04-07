import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";
import ModeSwitch from "../components/mode-switch";
import styled from "@emotion/styled";

const Profile = () => (
  <div>
    <Title>Profile</Title>
    横浜在住の大学生。コンピュータサイエンスを学んでいます。
    <br />
    おもにプログラミングと読書をして日々を過ごしています。
    <br />
    アルバイトや趣味で Web 開発も多少やります。
    <br />
    好きなアーティストは UNISON SQUARE GARDEN と fhána。
    <br />
    <br />
    何か御用ありましたら
    <a href="/form">フォーム</a>
    または<a href="mailto:hellorusk1998@gmail.com">メール</a>から気軽にどうぞ。
  </div>
);

const About = () => (
  <div>
    <Title>About this site</Title>
    <a href="https://nextjs.org/" target="_blank">
      Next.js
    </a>{" "}
    を用いて構築されています。
    <br />
    Netlify によって
    <a href="https://github.com/7ma7X/hellorusk.net" target="_blank">
      {" "}
      GitHub のリポジトリ
    </a>
    から自動でデプロイされています。
  </div>
);

export default () => (
  <>
    <Meta>
      <title key="title">whoami - HelloRusk Official Website</title>
      <meta property="og:title" content="HelloRusk Profile" />
      <meta property="og:url" content="/whoami" />
      <meta property="og:description" content="HelloRuskとは何者か？" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:image"
        content="https://hellorusk.net/mika_square.png"
      />
      <meta
        name="twitter:image"
        content="https://hellorusk.net/mika_square.png"
      />
    </Meta>
    <ModeSwitch />
    <div className="whoami">
      <Icon>
        <picture>
          <source type="image/webp" srcSet="/mika.webp" />
          <img src="/mika.png" alt="mika" />
          <br />
        </picture>
        <span>HN: HelloRusk</span>
      </Icon>
      <Detail>
        <Profile />
        <br />
        <About />
        <br />
        <br />
      </Detail>
    </div>
    <div className="jump">
      <Link href="https://hellorusk.net">
        <a>HOME</a>
      </Link>
    </div>
    <Footer />
  </>
);

const Title = styled.div`
  font-size: 1.5em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  text-shadow: 4px 4px 4px #c0c0c0;
`;

const Detail = styled.div`
  text-align: left;
  display: inline-block;
`;

const Icon = styled.div`
  & img {
    margin-top: 20px;
    height: 70px;
  }

  & span {
    font-size: 0.9em;
    font-style: italic;
    color: #a0a0a0;
  }
`;
