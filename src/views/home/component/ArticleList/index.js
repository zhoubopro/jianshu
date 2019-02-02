import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ArticleListItem, ListInfo, Meta, LoadMore } from '../../style';
import { actionCreators } from "../../../../store/home";
import { Link } from 'react-router-dom';

class ArticleList extends React.Component {

  // componentDidMount() {
  //   const { getArticleList } = this.props;
  //   getArticleList();
  // }

  render() {
    const { articleList, getMoreArticleList } = this.props;
    return (
      <Fragment>
        {
          articleList.map(item => {
            return (
              <Link to={'/detail/' + item.get('id')} key={item}>
                <ArticleListItem>
                  <img alt='' className='pic' src={item.get('imgUrl')}/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                  <Meta>
                    <span className="nickname">酱油白切鸡</span>
                    <span className="nickname">comment</span>
                    <span className="nickname">❤</span>
                  </Meta>
                </ArticleListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={getMoreArticleList}>
          阅读更多
        </LoadMore>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
});

const mapDispatchToProps = dispatch => {
  return {
    //   getArticleList: () => {
    //     dispatch(actionCreators.getArticleList());
    //   }
    getMoreArticleList: () => {
      dispatch(actionCreators.getMoreArticleList());
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);