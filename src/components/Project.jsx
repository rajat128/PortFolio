import { CiLink } from "react-icons/ci";
import { Link } from "react-router-dom";
function Project({ theme, title, description, technologies, link, github }) {
  console.log(github);
  
  return (
    <div className="hover:bg-gray-50 hover:dark:bg-[#101e38] transition-all duration-300 p-6 md:rounded-xl">
        <img className="w-60" src={technologies + theme} />
        <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300 mt-4">{ title }</h3>
        <p className="leading-7 text-gray-500 dark:text-gray-300 font-light text-base mt-4">{ description }</p>
        
        <div className="flex gap-6 text-gray-500 dark:text-gray-300 font-medium">
           
            <Link to={github} className="flex gap-2 w-20 rounded-full mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
               <img src="https://skillicons.dev/icons?i=github,0,0&perline=5&theme=" className=""></img>
            
            </Link>
            </div>
    </div>
  )
}

export default Project