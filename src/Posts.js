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
    return (
      <div className="post-main">
        <img src={props.imagePost} className="post-main-media" />
      </div>
    );
  }
  
  function PostFooter() {
    return (
      <div className="post-footer">
        <div className="action">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        <div className="liked">
          <img src="assets/img/gato-telefone.svg"/>
          <p>
            Curtido por <strong>gato-telefone</strong> e{" "}
            <strong>outras 312.234 pessoas</strong>
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
            <button className="button-comment"></button>
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
        <PostFooter />
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