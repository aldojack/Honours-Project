

export default function FunctionButton({BtnName, clickHandler, id}) {

  return (
    <button 
      id={id}
      type="button"
      onClick={clickHandler}
      className="max-w-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shrink-0"
      >
      {BtnName}
    </button>

  )
}
