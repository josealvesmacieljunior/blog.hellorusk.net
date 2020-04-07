import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";
import ModeSwitch from "../components/mode-switch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";

export default () => (
  <>
    <Meta>
      <title key="title">form - HelloRusk Official Website</title>
    </Meta>
    <ModeSwitch />
    <br />
    <FormContainer>
      <form
        name="contact"
        action="/"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <TextField name="name" label="Name (Optional)" margin="normal" />
        <br />
        <TextField
          name="message"
          label="Message"
          multiline
          rows="5"
          margin="normal"
          fullWidth
          required
          variant="filled"
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
      <br />
      <br />
    </FormContainer>
    <br />
    <div className="jump">
      <a href="https://hellorusk.net">HOME</a>
    </div>
    <Footer />
  </>
);

const FormContainer = styled.div`
  text-align: center;
  background-color: #ffffff;
  border-radius: 1em;

  & form {
    display: inline-block;
    text-align: left;
    width: 300px;
  }
`;
