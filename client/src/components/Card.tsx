const Card = () => {
  return (
    <div className="w-72 h-96 bg-white border border-gray-400 rounded-lg shadow-lg shadow-gray-900">
      <a href="#">
        <img className="rounded-t-lg" src={"/images/images.jpeg"} alt="house" />
      </a>
      <div className="p-3">
        <h5 className="mb-1 font-jetbrains-mono font-[800] text-xl text-gray-700">€1.200.000</h5>
        <h3 className="font-jetbrains-mono font-[300] text-sm text-gray-600">Bed rooms: 4, Bath rooms: 3</h3>
        <h3 className="font-jetbrains-mono font-[300] text-sm text-gray-600">Size: 150m²</h3>
        <h3 className="font-jetbrains-mono font-[300] text-sm text-gray-600">Build-Year: 2002</h3>
      </div>
      <div className="flex flex-row justify-around">
        <div className="bg-[#4BB0E1] rounded-3xl w-1/3 text-center mx-2">
          <h2 className="font-jetbrains-mono font-[800] text-sm text-white">Promoted</h2>
        </div>
        <div className="bg-[#015E8B] rounded-3xl w-1/3 text-center mx-2">
          <h2 className="font-jetbrains-mono font-[800] text-sm text-white">Negotiable</h2>
        </div>


      </div>
      <div className="bg-[#015E8B] w-full h-16 mt-3 rounded-b-lg p-2">
        <div className="flex flex-row justify-around py-1">
          <h4 className="font-jetbrains-mono font-[800] text-sm text-white">10.2%</h4>
          <h4 className="font-jetbrains-mono font-[800] text-sm text-white">6.4%</h4>
          <div>
            <ul className="flex justify-center">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-around">
          <h2 className="font-jetbrains-mono font-[600] text-[10px] text-gray-400">Yield</h2>
          <h2 className="font-jetbrains-mono font-[600] text-[10px] text-gray-400">Cap Rate</h2>
          <h2 className="font-jetbrains-mono font-[600] text-[10px] text-gray-400">Quality Rating</h2>

        </div>
      </div>
    </div>
  )
};

export default Card;



