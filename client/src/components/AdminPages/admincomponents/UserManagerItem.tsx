const UserManagerItem = ({ name, email }: any) => {
  return (

    <div className="flex flex-col justify-center py-2">
      <div className="h-16 border-1 border-black bg-gray-100 mx-10 rounded-xl grid grid-cols-4 gap-3">
        <div>
          <p className="font-jetbrains-mono font-[500] text-md text-black pt-5 pl-5">{name}</p>
        </div>

        <div>
          <p className="font-jetbrains-mono font-[500] text-md text-black pt-5 pl-5">{email}</p>
        </div>
        <div>
        </div>
        <div className="flex flex-row justify-center gap-3">
          <p className="font-jetbrains-mono font-[500] text-md text-blue-500 pt-5">update</p>
          <p className="font-jetbrains-mono font-[500] text-xl text-gray-600 pt-5">|</p>
          <p className="font-jetbrains-mono font-[500] text-md text-red-500 pt-5">delete</p>
        </div>
      </div>
    </div>
  )
}

export default UserManagerItem;
