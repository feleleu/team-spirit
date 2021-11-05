import styled from "styled-components";

export interface HeadingProps {

    level: 1 | 2 | 3 | 4
    children: React.ReactNode

}

export default function Heading ( { level, children }: HeadingProps ) {

    const Component = ({

        1: Heading1,
        2: Heading2,
        3: Heading3,
        4: Heading4,

    }[level])

    return <Component>

        { children }

    </Component>

}

const Heading1 = styled.h1`

    font-size: 20px;
    font-weight: 500;
    color: #274060;

`

const Heading2 = styled.h2`

    font-size: 14px;
    font-weight: 500;
    color: #274060;

`

const Heading3 = styled.h3`

    font-size: 12px;
    font-weight: 500;
    color: #274060;

`

const Heading4 = styled.h4`

    font-size: 12px;
    font-weight: 500;
    color: #fff;

    text-transform: uppercase;

`