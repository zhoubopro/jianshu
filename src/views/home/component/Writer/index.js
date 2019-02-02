import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from "../../../../store/home";
import { WriterWrapper } from '../../style';

class Writer extends React.Component {
  render() {
    return (
      <Fragment>
        <WriterWrapper>
          Writer
        </WriterWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
});

const mapDispatchToProps = dispatch => {
  return {
    getRecommendList: () => {
      dispatch(actionCreators.getRecommendList());
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Writer);