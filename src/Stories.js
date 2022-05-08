function Story(props) {
    return (
        <div className="story">
            <div>
                <img src={props.image} />
            </div>
            <p>{props.userName}</p>
        </div>
    );
}

const usersDataSimple = [
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },
    {
        userName: "9gag",
        image: "/assets/img/9gag.svg",
    },


];

export default function Stories() {
    return (
        <div className="stories">
            {usersDataSimple.map(Story)}
            <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
    );
}