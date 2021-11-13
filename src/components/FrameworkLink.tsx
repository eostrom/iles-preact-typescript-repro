import { FunctionComponent } from "preact"

const FrameworkLink: FunctionComponent = (props) =>
  <a target="_blank" href="https://preactjs.com">
    Preact
    { props.children }
  </a>

export default FrameworkLink
