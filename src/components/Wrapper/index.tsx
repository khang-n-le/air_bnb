import React from "react";
import { Wrapper } from "./styled";
import { useLocation } from "react-router-dom";

interface WrapperProps {
    children: React.ReactElement,
    maxWidth?: number
}

const WrapperComponent = ({ children, maxWidth }: WrapperProps) => {
    const location = useLocation();

    return <Wrapper maxWidth={maxWidth}>{children}</Wrapper>
}

export default WrapperComponent;