function SidebarHeader() {
    return (
        <div className="sidebar-header">
            <img src="/assets/img/meowed.svg" />
            <div>
                <p className="user-name">rudarabello</p>
                <p className="name">Rudá</p>
            </div>
        </div>
    );
}

function SidebarMainSugestion(props) {
    return (
        <div class="sidebar-content-sugestion">
            <img src={props.image} alt="" />
            <div class="sidebar-content-sugestion-names">
                <div>
                    <p>{props.name}</p>
                    <p class="sugestion-status">{props.status}</p>
                </div>
                <p class="sugestion-action">Seguir</p>
            </div>
        </div>
    );
}

const sugestionsData = [
    {
        name: "Jones",
        image: "/assets/img/gato-telefone.svg",
        status: "Segue você",
    },
    {
        name: "Jones",
        image: "/assets/img/gato-telefone.svg",
        status: "Segue você",
    },
    {
        name: "Jones",
        image: "/assets/img/gato-telefone.svg",
        status: "Segue você",
    },
    {
        name: "Jones",
        image: "/assets/img/gato-telefone.svg",
        status: "Segue você",
    },
];

function SidebarMain() {
    return (
        <div className="sidebar-content">
            <div class="sidebar-content-title">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            {sugestionsData.map(SidebarMainSugestion)}
        </div>
    );
}

function SidebarFooter() {
    return (
        <div className="sidebar-footer about">
            <div>
                <a href="/sobre">Sobre</a>
                <a href="/ajuda">Ajuda</a>
                <a href="/imprensa">Imprensa</a>
                <a href="/api">API</a>
                <a href="/carreiras">Carreiras</a>
                <a href="/privacidade">Privacidade</a>
                <a href="/termos">Termos</a>
                <a href="/localizacoes">Localizações</a>
                <a href="/contas-mais-relevantes">Contas mais relevantes</a>
                <a href="/hashtags">Hashtags</a>
                <a href="/idiomas">Idiomas</a>
            </div>
            <p className="about">&copy;2022 INSTAGRAM By Meta</p>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarHeader/>
            <SidebarMain />
            <SidebarFooter />
        </div>
    );
}