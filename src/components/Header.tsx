interface HeaderProps{
    genre: string;
}

export function Header(props: HeaderProps){
    return (
        <header>
          <span className="category">Categoria:<span> {props.genre}</span></span>
        </header>
    )
}