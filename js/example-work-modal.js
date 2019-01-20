import React from 'react';

class ExampleWorkModal extends React.Component {

  render() {

    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
        <img alt={example.image.desc}
          className="modal__image"
          src={example.image.src} />
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            {example.title}
          </h2>
          <div>
            <a id="project-link" className="color--skyBlue modal__link"
              href={example.href}>
              Check it out
        </a>
          </div>
          <p>

            <a id="git-link" className="color--skyBlue modal__link"
              href={example.git}>
              GitHub Repo
        </a>
          </p>
          <p className="modal__description">
            {example.desc}
          </p>
        </div>
      </div>
    )
  };
};

export default ExampleWorkModal;