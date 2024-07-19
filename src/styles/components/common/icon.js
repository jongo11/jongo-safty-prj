import styled from "@emotion/styled";
import _rem from "@/styles/remTransform";

const Icon = styled.em`
    display: ${(props) => props.icon ? 'inline-block' : 'none'};
    width: ${(props) => (props.width ? props.width : _rem(17))};
    height: ${(props) => (props.height ? props.height : _rem(17))};
    margin-right: ${(props) => props.marginRight};

`;

export { Icon };
