import styled from "styled-components";

const WaveBar = styled.div`
    width: 4px;
    height: ${props => props.height}px;
    // background-color: ${/** props => props.theme.colors.brandCyan[0]  */ ""}
    background-color: black;
    margin: 0 2px;
    display: inline-block;
    border-radius: 1px;
`;

export default WaveBar;
