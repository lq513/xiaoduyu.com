import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// tools
import { dateDiff } from '@utils/date';

// components
import HTMLText from '@components/html-text';

// style
import styles from './index.scss';

export default class NotificationListItem extends Component {

  static propTypes = {
    notification: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.expandComment = this.expandComment.bind(this);
  }

  expandComment() {
    const { notification } = this.props;
    notification.expandComment = notification.expandComment ? false : true;
    this.setState({});
  }

  render() {

    const { notification } = this.props;
    const notice = notification;

    let content = null;
    let avatar = null;

    if (notice.sender_id && notice.sender_id.avatar_url) {
      avatar = <i className="load-demand" data-load-demand={`<img class=${styles.avatar} src=${notice.sender_id.avatar_url} />`}></i>
    }

    switch (notice.type) {

      case 'follow-you':
        content = (<div>
            <div styleName="header">
              <Link to={`/people/${notice.sender_id._id}`}>{avatar}{notice.sender_id.nickname}</Link>
              {dateDiff(notice.create_at)} 关注了你
            </div>
          </div>)
        break

      case 'follow-posts':
        content = (<div>
            <div styleName="header">
              <Link to={`/people/${notice.sender_id._id}`}>{avatar}{notice.sender_id.nickname}</Link>
              {dateDiff(notice.create_at)} 收藏了你的
              <Link to={`/posts/${notice.posts_id._id}`}>{notice.posts_id.title}</Link>
              {/* {notice.posts_id.type == 1 ?  '分享' : '提问'} */}
            </div>
          </div>)
        break

      case 'like-posts':
        content = (<div>
            <div styleName="header">
              <Link to={`/people/${notice.sender_id._id}`}>{avatar}{notice.sender_id.nickname}</Link>
              {dateDiff(notice.create_at)} 赞了你的
              <Link to={`/posts/${notice.posts_id._id}`}>{notice.posts_id.title}</Link>
              {/* {notice.posts_id.type == 1 ?  '分享' : '提问'} */}
            </div>
          </div>)
        break

      case 'reply':
        content = (<div>
          <div styleName="header">

            {/*
            <div className={styles.actions}>
              <Link to={`/write-comment?posts_id=${notice.comment_id.posts_id._id}&parent_id=${notice.comment_id.parent_id._id}&reply_id=${notice.comment_id._id}`}>回复</Link>
            </div>
            */}

            <Link to={`/people/${notice.sender_id._id}`}>{avatar}{notice.sender_id.nickname}</Link>
            {dateDiff(notice.create_at)} 回复了你的
            <Link to={`/comment/${notice.comment_id.parent_id._id}`}>
              {notice.comment_id.reply_id ? notice.comment_id.reply_id.content_trim : notice.comment_id.parent_id.content_trim}
            </Link>
            {notice.comment_id.reply_id ? '回复' : '评论'}
          </div>
          <div styleName="content">
            <HTMLText content={notice.comment_id.content_html} />
            {/*notice.expandComment ?
              <HTMLText content={notice.comment_id.content_html} /> :
              <div onClick={this.expandComment} styleName="content_trim">{notice.comment_id.content_trim}</div>*/}
          </div>
        </div>)
        break

      case 'comment':
        content = (<div>
          <div styleName="header">
            {/*
            <div className={styles.actions}>
              <Link to={`/write-comment?posts_id=${notice.comment_id.posts_id._id}&parent_id=${notice.comment_id._id}`}>回复</Link>
            </div>
            */}
            <Link to={`/people/${notice.sender_id._id}`}>{avatar}{notice.sender_id.nickname}</Link>
            {dateDiff(notice.create_at)} 评论了你的
            <Link to={`/posts/${notice.comment_id.posts_id._id}`}>{notice.comment_id.posts_id.title}</Link>
            {/* {notice.comment_id.posts_id.type == 1 ?  '分享' : '提问'} */}
          </div>
          <div styleName="content" onClick={this.expandComment}>
            <HTMLText content={notice.comment_id.content_html} />
            {/*notice.expandComment ?
              <HTMLText content={notice.comment_id.content_html} /> :
              <div onClick={this.expandComment} styleName="content_trim">{notice.comment_id.content_trim}</div>*/}
          </div>
        </div>)
        break

      case 'like-reply':

        let commentId = notice.comment_id.parent_id ? notice.comment_id.parent_id._id : notice.comment_id._id;

        content = (<div>
          <div styleName="header">
            <Link to={`/people/${notice.sender_id._id}`}>{avatar}{notice.sender_id.nickname}</Link>
            {dateDiff(notice.create_at)} 赞了你的
            <Link to={`/comment/${commentId}`}>{notice.comment_id.content_trim}</Link>
            回复
          </div>
        </div>)
        break

      case 'like-comment':
        content = (<div>
          <div styleName="header">
            <Link to={`/people/${notice.sender_id._id}`}>{avatar}{notice.sender_id.nickname}</Link>
            {dateDiff(notice.create_at)} 赞了你的
            <Link to={`/comment/${notice.comment_id._id}`}>{notice.comment_id.content_trim}</Link>
            评论
          </div>
        </div>)
        break

      // 新的回答通知
      case 'new-comment':
        content = (<div>
          <div styleName="header">
            <Link to={`/people/${notice.sender_id._id}`}>{avatar}{notice.sender_id.nickname}</Link>
            {dateDiff(notice.create_at)} 评论了
            <Link to={`/posts/${notice.comment_id.posts_id._id}`}>{notice.comment_id.posts_id.title}</Link>
            {/* {notice.comment_id.posts_id.type == 1 ?  '分享' : '提问'} */}
          </div>
          <div styleName="content">
            <Link to={`/comment/${notice.comment_id._id}`}>{notice.comment_id.content_trim}</Link>
          </div>
        </div>)
        break
    }

    if (content) {

      if (notice.deleted) {
        content = (<div key={notice._id} className="list-group-item">
          <del styleName="del">{content}</del>
        </div>)
      } else {
        content = (<div key={notice._id} className="list-group-item" styleName={notice.has_read ? '' : 'unread'}>
          {content}
        </div>)
      }

    }

    return <div styleName="item">{content}</div>

  }
}
