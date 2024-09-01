import rocketIcon from "../../assets/images/ui/Rocket_icon.svg";
import PropTypes from 'prop-types';

export default function ModalSuccessOpen({isOpen, onClose}) {

  if (!isOpen) return null

  return (
    <div className="z-50 w-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center max-xs:items-start">
      <div className="flex flex-col items-center gap-2 bg-white max-xs:p-10 max-xs:mt-36 p-8 shadow-lg w-[90%] max-xs:h-auto h-auto max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Success!</h2>
        <p className="text-center text-gray-700">Thank you for contacting Endpoint. We will get back to you as soon as possible.</p>
        <img src={rocketIcon} alt="rocket icoj" className="max-xs:h-40"/>

        <button
          className="mt-6 font-semibold w-full bg-violet-900 text-white py-2 rounded hover:bg-violet-700 transition duration-150"
          onClick={onClose}
        >
          CLOSE
        </button>
      </div>
    </div>
  )
}

ModalSuccessOpen.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen must be a boolean and is required
  onClose: PropTypes.func.isRequired, // onClose must be a function and is required
};
