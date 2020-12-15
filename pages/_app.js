// _app.js 는 공통적인 부분을 넣을 때 사용하면 된다.
// 다른 페이지들에 적용이 된다.
import "antd/dist/antd.css";
// import Head from 'next/head' // HTML에서 head 부분을 바꿀 때
import PropTypes from "prop-types";
const NodeBird = ({ Component }) => {
  return <Component />;
};
NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default NodeBird;
