import { Link } from "react-router-dom"

interface ButtonDecorationProps {
    customCLass?: string
}

const ButtonDecoration: React.FC<ButtonDecorationProps> = ({customCLass}) => {
  return (
    <div>
      <Link to="/product">
        <button className={`bg-[#A238FF] text-white font-normal  rounded-3xl shadow-custom transition duration-300 hover:text-black hover:bg-white ${customCLass}`}>Buy Now</button>
      </Link>
    </div>
  )
}

export default ButtonDecoration