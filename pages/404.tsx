import Meta from "next/head";
import Footer from "../components/footer";
import ModeSwitch from "../components/mode-switch";
import styled from "@emotion/styled";

export default () => (
  <>
    <Meta>
      <title key="title">Not Found - HelloRusk Official Website</title>
    </Meta>
    <ModeSwitch />
    <Error>
      <span>404 Not Found</span>
      <br />
      <span>お探しのページは見つかりませんでした。</span>
      <br />
      <br />
      <img src="/hitori.jpg" width="90%" alt="hitori" />
      <br />
    </Error>
    <br />
    <div className="jump">
      <a href="https://hellorusk.net">HOME</a>
    </div>
    <Footer />
  </>
);

const Error = styled.div`
  padding-top: 15px;
  text-align: center;
`;
