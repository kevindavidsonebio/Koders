// import Favorite from "@mui/icons-material/Favorite";

const Footer = () => {
  const FooterStyle = {
    color: "#a3cb38",
    backgroundColor: "#284265",
  };
  return (
      <footer style={FooterStyle}>
        {/* <p>
          Made with <Favorite /> by <i>Group 3</i>
        </p> */}
        {/* di ko na ginamit yung icon para magpantay ng formatting sa text. */}
        <h4 align="center">
          Made with ♥ by <i>Group 3</i>
        </h4>
      </footer>
  );
};

export default Footer;
