import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

//tagged template literal feature from ES6

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        {/* StyledApp itself is a div element because we made it so. the container has some more divs we created as Row. it has a sibling GlobalStyles for it to apply styles globally instead of a css file. we can apply properties conditionally. */}

        {/* <Row type="vertical"> */}
        <Row>
          <Row type="horizontal">
            {/* <Heading type="h1">The Wild Oasis</Heading> */}
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                // variation="primary"
                // size="medium"
                onClick={() => alert("CHECK IN")}
              >
                Check in
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("CHECK OUT")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
