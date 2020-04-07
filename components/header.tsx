import styled from "@emotion/styled";

export default () => (
  <Header>
    <Bio>
      <picture>
        <source type="image/webp" srcSet="/mika.webp" />
        <Img src="/mika.png" alt="mika" />
        <br />
      </picture>
      HelloRusk
      <br />
      <span>
        <a href="mailto:hellorusk1998@gmail.com">k＠hellorusk.net</a>
      </span>
    </Bio>
  </Header>
);

const Header = styled.div`
  margin-top: -10px;
  text-align: center;
`;

const Bio = styled.div`
  min-width: 290px;
  display: inline-block;
  height: 150px;

  & span {
    font-size: 0.9em;
    color: #a0a0a0;
  }

  & span a {
    color: #a0a0a0;
  }
`;

const Img = styled.img`
  height: 110px;
  margin-bottom: 0.2em;
  padding: 5px;
  border-radius: 150px;
  -webkit-border-radius: 150px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
  -webkit-filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
`;
