import Link from "next/link";
import data from "./posts.json";
import { internalLink, removeTrailingSlash } from "./blog-meta";
import { ModeType } from "../store/types";
import { connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const postsDateList = data["postsDateList"];
const postsComponentList: JSX.Element[] = [];

for (const date of postsDateList) {
  const { meta } = require(`../pages/posts/${date}`);

  const normalizedLink = internalLink(meta.date);
  const normalizedUrl = removeTrailingSlash(meta.url);

  postsComponentList.push(
    <div className="blog" key={meta.date}>
      <div className="date">{meta.date}</div>
      <div className="title">
        <a href={`https://hellorusk.net${normalizedUrl}`}>{meta.title}</a>
      </div>
    </div>
  );
}

interface PostsRendererProps {
  linkColor: string;
  page: number;
}

const PostsRenderer = (props: PostsRendererProps) => {
  const N = 7;

  const article_num = postsComponentList.length;
  const page = props.page;

  const prev_cri = page > 1 && (page - 1) * N < article_num;
  const next_cri = page >= 1 && page * N < article_num;
  const inner_cri = (page - 1) * N < article_num && article_num <= page * N;

  const show_more = () => {
    return (
      <PersistGate loading={null} persistor={persistor}>
        <Global
          styles={css`
            .post_prev {
              display: inline-block;
              width: 50%;
            }

            .post_prev p {
              text-align: left;
              font-style: italic;
              cursor: pointer;
              color: ${props.linkColor};
              font-size: 1.1em;
            }

            .post_next {
              display: inline-block;
              width: 50%;
            }

            .post_next p {
              text-align: right;
              font-style: italic;
              cursor: pointer;
              color: ${props.linkColor};
              font-size: 1.1em;
            }
          `}
        ></Global>
        <div className="post_prev">
          {prev_cri ? (
            <p>
              <Link href={`/blog?page=${page - 1}`} prefetch={false}>
                <a>&lt; PREV</a>
              </Link>
            </p>
          ) : null}
        </div>
        <div className="post_next">
          {next_cri ? (
            <p>
              <Link href={`/blog?page=${page + 1}`} prefetch={false}>
                <a>NEXT &gt;</a>
              </Link>
            </p>
          ) : null}
        </div>
        <div>
          {!prev_cri && !next_cri && !inner_cri ? (
            <Error>
              <span>表示する記事がありません。</span>
              <br />
              <br />
              <img src="/hitori.jpg" width="90%" alt="hitori" />
              <br />
            </Error>
          ) : null}
        </div>
      </PersistGate>
    );
  };

  return (
    <div>
      {page >= 1 ? postsComponentList.slice((page - 1) * N, page * N) : null}
      {show_more()}
    </div>
  );
};

const mapStateToProps = (state: ModeType) => {
  return {
    linkColor: state.linkColor
  };
};

export default connect(mapStateToProps)(PostsRenderer);

const Error = styled.div`
  padding-top: 15px;
  text-align: center;
`;
