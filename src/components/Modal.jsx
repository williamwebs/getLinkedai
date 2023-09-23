import check from "../assets/check.png";
import vector from "../assets/vector2.png";
import star from "../assets/starpu.png";
import starWhite from "../assets/star.png";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black50">
      <div className="bg-transparent py-10 px-2 md:p-10 rounded border-2 border-normalPurple shadow-md relative">
        <div className="image__box w-1/2 mx-auto relative">
          <div className="flex">
            <img src={check} alt="" className="absolute -left-10" />
            <img src={vector} alt="" className="z-[2] ml-4 md:ml-10" />
          </div>
        </div>

        <p className="font-semibold font-Montserrat text-primary w-1/2 md:w-full mx-auto text-base md:text-[36px] leading-[19px] md:leading-[39px] text-center">
          Congratulations <br /> you have successfully Registered!
        </p>
        <p className="font-normal font-Montserrat text-primary text-sm leading-[17px] text-center mt-4">
          Yes, it was easy and you did it! <br /> check your mail box for next
          step
        </p>
        <button
          onClick={onClose}
          className="mt-10 gradient w-full text-white px-4 py-2 rounded"
        >
          Back
              </button>
              <div className="star absolute -top-6 md:-top-6 -right-4 md:-right-6">
                  <img src={star} alt="" />
              </div>
              <div className="star absolute bottom-0 right-6">
                  <img src={star} alt="" />
              </div>
              <div className="star absolute top-[30%] left-2 md:left-10 md:w-[40px]">
                  <img src={starWhite} alt="" />
              </div>
      </div>
    </div>
  );
};

export default Modal;
