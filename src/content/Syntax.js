import React from 'react'
import ReactGA from 'react-ga';
import Section from "../components/Section";
import SubSection from "../components/SubSection";
import CodeBlock from "../util/CodeBlock";

class Syntax extends React.Component {

    componentDidMount() {
        document.title = "Programming Flix | Syntax";
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Section name="Syntax">

                <p>
                    This page documents a few features that make Flix code easier to read and write.
                </p>

                <SubSection name="Pipelines">

                    <CodeBlock>
                        {`List.range(1, 100) |> List.length`}
                    </CodeBlock>

                </SubSection>

                <SubSection name="Match Lambdas">

                    <p>TBD</p>

                    <CodeBlock>
                        {`List.map(match (x, y) -> `}
                    </CodeBlock>


                </SubSection>

                <SubSection name="Simple Enums">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="Casting and Ascription">

                    <p>TBD</p>

                </SubSection>


                <SubSection name="Let*">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="ToString and println">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="Bug!">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="String Interpolation">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="Partial Application and Currying">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="Let pattern match">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="Infix Application">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="Built-in Literals">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="Arrays">

                    <p>TBD</p>

                </SubSection>

                <SubSection name="Holes and Named Holes">

                    <p>TBD</p>

                </SubSection>

            </Section>
        )
    }

}

export default Syntax
