import React from "react";

function PostHeader(props) {
  return (
    <div className="post-header">
      <div>
        <img src={props.image} />
        <p>{props.userName}</p>
      </div>
      <p className="post-header-menu"></p>
    </div>
  );
}

function PostMain(props) {

  const [likedNow, setLikedNow] = React.useState(false);

  const [iconLike, setIconLike] = React.useState(
    <ion-icon name="heart-outline"></ion-icon>
  );
  function liked() {

    setLikedNow(true);

    setIconLike(
      <ion-icon style={{color: 'rgb(226, 0, 0)'}} name="heart-sharp" ></ion-icon>
    );
  }

  function deslikeButton() {

    setLikedNow(false);

    setIconLike(
      <ion-icon name="heart-outline" ></ion-icon>
    );
  }

  function likedButton() {

    setLikedNow(true);

    setIconLike(
      <ion-icon style={{color: 'rgb(226, 0, 0)'}} name="heart-sharp" ></ion-icon>
    );
  }

  function likedButtonRun() {
    if (likedNow === false) {
      likedButton();
    } else {
      deslikeButton();
    }
  }

  return (
    <div>
      <div className="post-main">
        <img
          onClick={liked}
          src={props.imagePost}
          alt=""
          className="post-main-media"
        />
      </div>
      <PostFooter function={likedButtonRun} icon={iconLike} />
    </div>
  );
}

function PostFooter(props) {


  return (
    <div className="post-footer">
      <div className="action">
        <div className="icons"  >
          <span onClick={props.function}>{props.icon}</span>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
      <div className="liked">
        <img src="assets/img/gato-telefone.svg" />
        <p>
          Curtido por <strong>gato-telefone</strong> e{" "}<strong>outras 312.234 pessoas</strong>
        </p>
      </div>
      <div className="comment">
        <ul className="list-comments"></ul>
        <div className="comment-add">
          <input
            className="input-comment"
            type="text"
            placeholder="Adicione um comentário..."
          />
        </div>
      </div>
    </div>
  );
}

function Post(object) {
  return (
    <div className="post">
      <PostHeader userName={object.userName} image={object.image} />
      <PostMain imagePost={object.imagePost} />
    </div>
  );
}

const postData = [
  {
    userName: "Dog",
    image: "/assets/img/dog.svg",
    imagePost: "/assets/img/dog.svg",
  },
  {
    userName: "Dog",
    image: "/assets/img/dog.svg",
    imagePost: "/assets/img/dog.svg",
  },
  {
    userName: "Dog",
    image: "/assets/img/dog.svg",
    imagePost: "/assets/img/dog.svg",
  },
];

export default function Posts() {
  return <div className="posts">{postData.map(Post)}</div>;
}