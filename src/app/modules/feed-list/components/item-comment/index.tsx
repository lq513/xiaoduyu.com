import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
import useReactRouter from 'use-react-router';

// import featureConfig from '@config/feature.config.js';
// functions
// import Device from '@utils/device';

// redux
// import { bindActionCreators } from 'redux';
// import { connect, useSelector } from 'react-redux';
// import { isMember } from '@reducers/user';
// import { viewPostsById } from '@actions/posts';

// components
// import HTMLText from '@components/html-text';
// import CommentList from '@components/comment/list';
// import Editor from '@components/editor-comment';
// import Follow from '@components/follow';
// import Like from '@components/like';
// import EditButton from '@components/edit-button';
// import ReportMenu from '@components/report-menu';
// import MoreMenu from '@components/more-menu';
// import CommentList from '@modules/comment-list';

// import Bundle from '@components/bundle';
// import Share from '@components/share';
// import GridListImage from '@components/grid-list-image';


// styles
import './index.scss';

interface Props {
  comment: any,
  posts: any
}

export default function({ comment, posts }:Props) {

  // const _isMember = useSelector((state:object)=>isMember(state))

  const { history, location, match } = useReactRouter();

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  }
  
  return (<div
    styleName="item"
    className="card"
    onClick={()=>{
      history.push(`/comment/${comment._id}`)
    }}
    >
      <div styleName="head">
        <div styleName="info">
          <Link to={`/people/${comment.user_id._id}`} onClick={stopPropagation}>
            <i
              styleName="avatar"
              className="load-demand"
              data-load-demand={`<img src="${comment.user_id.avatar_url}" />`}>
              </i>
            <b>{comment.user_id.nickname}</b>
          </Link>
        </div>
      </div>

      {/* <div styleName="content"><HTMLText content={comment.content_summary} /></div> */}

      {comment.content_summary ?
        <div styleName="content">{comment.content_summary}</div>
        : null}

      {(()=>{

        if (!comment.parent_id && !posts) {
          return (<del styleName="posts-item">帖子被删除</del>)
        }

        // 如果有parent_id，表示该条评论是回复，如果不存在reply_id，那么reply被删除
        if (comment.parent_id && !comment.reply_id) {
          return (<div styleName="posts-item">回复被删除</div>)
        }

        if (comment.reply_id) {

          return (<div
            styleName="reply-item"
            className="rounded"
            >
            <div>              
              <div>
                <Link to={`/people/${comment.reply_id.user_id._id}`} styleName="posts-item-nickname">
                  {comment.reply_id.user_id.nickname}
                </Link>
              </div>
            </div>
            <div styleName="posts-item-reply">
              {comment.reply_id.content_summary}
            </div>
          </div>)
        }
        
        if (posts) {

          return (<div styleName="posts-item" className="rounded">
            <div className="mb-1">
              <Link to={`/posts/${posts._id}`} styleName="posts-item-title">{posts.title}</Link>
            </div>
          </div>)
        }

      })()}
      
      <div styleName="footer">          
          <div styleName="actions-bar" className="d-flex justify-content-between">
            <div styleName="actions" className="text-secondary">
              {comment.reply_count ? <span>{comment.reply_count} 条回复</span> : null}
              {comment.like_count ? <span>{comment.like_count} 人赞</span> : null}
            </div>
          </div>
      </div>

    </div>)
}