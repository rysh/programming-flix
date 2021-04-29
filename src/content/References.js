import React from 'react'
import ReactGA from 'react-ga';
import Section from "../components/Section";
import Editor from "../util/Editor";
import Code from "../components/Code";
import SubSection from "../components/SubSection";
import CodeBlock from "../util/CodeBlock";
import DesignNote from "../components/DesignNote";

class References extends React.Component {

    componentDidMount() {
        document.title = "Programming Flix | References";
        ReactGA.pageview(window.location.href);
    }

    render() {
        return (
            <Section name="References">

                <p>
                    Flix supports references in the ML-tradition. The three key operations are <Code>ref
                    e</Code>, <Code>deref e</Code>,
                    and <Code>e := e</Code>. The <Code>ref e</Code> operation allocates a reference cell in the heap and
                    returns its location, the <Code>deref</Code> operation dereferences a location and returns the
                    content of a reference cell, and finally the assigment <Code>:=</Code> operation changes the value
                    of a reference cell. Informally, a reference cell can be thought of as an "object" with
                    a single field that can be changed.
                </p>

                <p>
                    All references operations are by nature impure.
                </p>

                <p>
                    Reference cells do not support any notion of equality or ordering.
                </p>

                <SubSection name="Allocation">

                    <p>
                        A reference cell is allocated as follows:
                    </p>

                    <CodeBlock>{`ref 42`}</CodeBlock>

                    <p>
                        which returns a value of type <Code>Ref[Int32]</Code> which is a reference (pointer) to a single
                        memory cell that holds the value <Code>42</Code>.
                    </p>

                </SubSection>

                <SubSection name="Dereference">

                    <p>
                        A reference cell is accessed (de-referenced) as follows:
                    </p>

                    <CodeBlock>{`let l = ref 42;
deref l`}</CodeBlock>

                    <p>
                        which returns <Code>42</Code> as expected.
                    </p>

                </SubSection>

                <SubSection name="Assignment">

                    <p>
                        A reference cell can have its value updated as follows:
                    </p>

                    <CodeBlock>{`let l = ref 42;
l := 84;
deref l`}</CodeBlock>

                    <p>
                        which returns <Code>84</Code> as expected.
                    </p>

                </SubSection>

                <SubSection name={"Example: A Simple Counter"}>

                    <p>
                        The following program models a simple counter that can be incremented:
                    </p>

                    <CodeBlock>{`enum Counter {
    case Counter(Ref[Int32])                        
}

def newCounter(): Counter & Impure = Counter(ref 0)

def getCount(c: Counter): Int32 & Impure =
    let Counter(l) = c;
    deref l

def increment(c: Counter): Unit & Impure = 
    let Counter(l) = c;
    l := (deref l) + 1
    
def f(): Unit & Impure = 
    let c = newCounter();
    increment(c);
    increment(c);
    increment(c);
    getCount(c) |> println`}</CodeBlock>

                    <p>
                        Note that the <Code>newCounter</Code>, <Code>getCount</Code>, <Code>increment</Code>,
                        and <Code>f</Code> functions must all be marked as <Code>Impure</Code>.
                    </p>

                </SubSection>

                

                <DesignNote>
                    Flix does not support any notion of global mutable state. If you need to maintain a program-wide
                    counter (or other mutable state) then you have to allocate it in the main function and explicitly
                    thread it through the program.
                </DesignNote>

            </Section>
        )
    }

}

export default References
