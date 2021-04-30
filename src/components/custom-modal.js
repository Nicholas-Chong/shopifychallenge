
import React from "react"
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu"
import gsap from "gsap"

class Modal extends React.Component {
  openModal() {
    document.body.style.height = "100vh"
    document.body.style.overflow = "hidden"
    var tl = gsap.timeline()
    tl.to(`#${this.props.id}_modal`, {duration: 0.15, autoAlpha: 1})
    tl.to(`#${this.props.id}_modalContentWrapper`, {duration: 0.25, opacity: 1, scale: 1, ease: "back"})
  } 

  closeModal() {
    var tl = gsap.timeline()
    tl.to(`#${this.props.id}_modalContentWrapper`, {duration: 0.25, opacity: 0, scale: 0, ease: "power2"})
    tl.to(`#${this.props.id}_modal`, {duration: 0.15, autoAlpha: 0})
    document.body.style.height = null
    document.body.style.overflow = null
  }

  render() {
    return (
      <ModalWrapper id={`${this.props.id}_modal`}>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
        <ModalContentWrapper id={`${this.props.id}_modalContentWrapper`}>
          <HamburgerMenuContainer>
            <HamburgerMenu
              isOpen={true}
              menuClicked={this.closeModal.bind(this)}
              width={20}
              height={20}
              strokeWidth={3}
              color="black"
            />
          </HamburgerMenuContainer>
          <ModalTitleWrapper>
            <ModalTitle>{this.props.name}</ModalTitle>
          </ModalTitleWrapper>
          <ModalContent id={`${this.props.id}_modalContent`}>
            {this.props.children}
          </ModalContent>
        </ModalContentWrapper>
      </ModalWrapper>
    )
  }
}

export default Modal

const HamburgerMenuContainer = styled.div`
  position: absolute;
  display: inline;
  padding-top: 40px;
  padding-right: 40px;
  top: 0;
  right: 0;
  z-index: 99;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 101vh;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0,0,0,0.6) !important;
  visibility: hidden;
  overflow: scroll;
  z-index: 99;
  cursor: auto;
`;

const ModalContentWrapper = styled.div`
  height: 50vh;
  min-height: 500px;
  width: 75vw;
  margin: auto;
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  position: relative;
  opacity: 0;
  transform: scale(0, 0);
  max-width: 1000px;
`;

const ModalTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  color: #333333;
  display: inline-block;
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ModalContent = styled.div`
  font-size: larger;
  max-height: 90%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
`;