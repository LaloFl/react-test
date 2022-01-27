import "./styles.sass";
export default function Styled() {
  return (
    <div className="styled__container" id="styled__main">
      <h1>Styled Components</h1>
      <span>Consequat ad minim anim excepteur excepteur consectetur excepteur ipsum.</span>
      <div className="button__container">
          <button>Soy un boton feliz</button>
          <button>Soy un boton feliz</button>
          <button>Soy un boton triste</button>
      </div>
      <div className="grid__content">
          <div className="grid__item grid__content__left">
              <p>Perro</p>
          </div>
          <div className="grid__item grid__content__right">
              <p>Perro</p>
          </div>
      </div>
    </div>
  );
}
