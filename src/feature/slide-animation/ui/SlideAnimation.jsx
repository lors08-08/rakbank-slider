import {useRef} from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './index.css'

/*
* Component animates appearing/disappearing of elements.
*/
export const SlideAnimation = ({children}) => {
  const ref = useRef(null);

  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        key={children}
        nodeRef={ref}
        addEndListener={(done) => {
          ref.current.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
      >
        <div ref={ref} style={{width: '100%'}}>
          <div className="slider-wrapper">
            {children}
          </div>
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}


