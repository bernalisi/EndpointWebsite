

export default function ModalSuccessOpen({isOpen, onClose}) {
  if (!isOpen) return null

  return (
    <div className="z-50 w-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center max-xs:items-start">
      <div className="bg-white max-xs:p-10 max-xs:mt-36 p-8 shadow-lg w-[90%] max-xs:h-[35%] h-[60%] max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Success!</h2>
        <p className="text-center text-gray-700">Your message has been sent successfully. We will get back to you soon!</p>
        <button
          className="mt-6 font-semibold w-full bg-violet-900 text-white py-2 rounded hover:bg-violet-700 transition duration-150"
          onClick={onClose}
        >
          <a href="/">CLOSE</a>
        </button>
      </div>
    </div>
  )
}
