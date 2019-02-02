import React from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem, MoreTopics } from '../../style';
// import { actionCreators } from '../../../../store/home'

class Topic extends React.Component {

  // componentDidMount() {
  //   const { getTopicList } = this.props;
  //   getTopicList()
  // }

  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {
          topicList.map(item => {
            return <TopicItem key={item.get('id')}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
                alt=''
              />
              {item.get('title')}
            </TopicItem>
          })
        }
        <MoreTopics>
          更多热门专题 &gt;
        </MoreTopics>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
});

const mapDispatchToProps = dispatch => {
  return {
  //   getTopicList: () => {
  //     dispatch(actionCreators.getTopicList());
  //   }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);