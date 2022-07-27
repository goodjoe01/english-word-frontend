import React, { useEffect, useRef, useState } from 'react'
import { Ref } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import '../stylesheets/FormCollection.css'

/* type Props = {
  isFormEnable: boolean,
  enableForm: ()=>void,
} */

function useOutsideAlerter(ref: React.MutableRefObject<HTMLDivElement | null>, activate: ()=>void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        activate();
/*         alert('HOLI');
 */      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function FormCollection() {

  const [isFormEnable, setIsFormEnable] = useState(false);

  const enableForm = ()=>{
    isFormEnable? setIsFormEnable(false) : setIsFormEnable(true);
    console.log(isFormEnable);
  }

  const enableSpan = () =>{
    setIsFormEnable(false);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, enableSpan);

  return (

    <div ref={wrapperRef} className='column is-4 pt-0'>
      <div className={`collection card myapp-add-collection ${isFormEnable? "onclick-disable" : "onclick-unable"} `}>
        <div className="card-content py-2 px-2">
          <div className="content">
            <span  onClick={enableForm} className={`is-align-items-center ${isFormEnable? "span-disable" : "span-enable"}`}>
              <span className='is-flex'>
                  <AiOutlinePlusCircle/>
                </span>
                <p className='is-size-7 px-2 has-has-text-centered'>Add another collection</p>
            </span>
            {/* FORM */}
            <form className={isFormEnable? "form-enable": "form-disable"} action="">
              <div className='field mb-2'>
                <label className='label' htmlFor=""></label>
                <div className="control">
                  <input type="text" className="input is-size-7" placeholder={`Insert collection's name`}/>
                </div>
              </div>
              <div className="control">
                <button className="button is-link is-size-7">Add collection</button>
              </div>
            </form>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default FormCollection
