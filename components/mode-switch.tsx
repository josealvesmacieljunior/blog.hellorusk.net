import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";
import { lightmode, darkmode } from "../store/actions";
import { connect } from "react-redux";
import { ModeType, ActionTypes } from "../store/types";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";

interface LayoutProps {
  isDarkMode: boolean;
  textColor: string;
  lightmode: () => ActionTypes;
  darkmode: () => ActionTypes;
}

const CyanSwitch = withStyles({
  switchBase: {
    color: cyan[300],
    "&$checked": {
      color: cyan[500]
    },
    "&$checked + $track": {
      backgroundColor: cyan[500]
    }
  },
  checked: {},
  track: {
    border: "1.5px solid rgb(21, 32, 43)",
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "#FFFFFF"
  }
})(Switch);

const ModeSwitch: React.FC<LayoutProps> = (props: LayoutProps) => {
  const handleChange = () => {
    props.isDarkMode ? props.lightmode() : props.darkmode();
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Container>
        <a href="https://hellorusk.net">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            id="home_icon"
          >
            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
          </svg>
        </a>
        <CyanSwitch
          className="modechange"
          checked={props.isDarkMode}
          onChange={() => handleChange()}
          value="checked"
          color="primary"
        />
      </Container>
      <Global
        styles={css`
          #home_icon {
            fill: ${props.textColor};
          }
        `}
      ></Global>
    </PersistGate>
  );
};

const Container = styled.div`
  margin-left: -5px;
  display: flex;

  svg {
    margin: 5px;
  }

  .modechange {
    left: -8px;
    top: -1px;
  }
`;

const mapStateToProps = (state: ModeType) => {
  return {
    isDarkMode: state.isDarkMode,
    textColor: state.textColor
  };
};

const mapDispatchToProps = {
  lightmode,
  darkmode
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
