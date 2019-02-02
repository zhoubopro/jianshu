import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../../style';
// import { actionCreators } from "../../../../store/home";

class Recommend extends React.Component {

  // componentDidMount() {
  //   const { getRecommendList } = this.props;
  //   getRecommendList();
  // }

  render() {
    const { recommendList } = this.props;
    return (
      <Fragment>
        <RecommendWrapper>
          {
            recommendList.map(item => {
              return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} alt={item.get('id')} />
            })
          }
        </RecommendWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
});

const mapDispatchToProps = dispatch => {
  return {
  //   getRecommendList: () => {
  //     dispatch(actionCreators.getRecommendList());
  //   }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);

