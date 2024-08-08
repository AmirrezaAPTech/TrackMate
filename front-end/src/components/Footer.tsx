import { FooterList } from "../constants/constants"


const Footer = () => {
  return (
    <div id="footer" className="w-screen relative lg:h-[25vh] max-lg:pb-5 flex flex-col justify-center items-center gap-y-5">
       <div className="absolute max-2xl:hidden right-24"><a href="#">Up</a></div>
        <div className="flex flex-col justify-start items-center gap-y-5">
        <div className="w-full h-[1px] bg-white lg:hidden"></div>
            <div className="flex justify-center items-center gap-x-36 px-2">
                    <ul className="list-none flex max-lg:flex-col gap-y-8 justify-center items-center gap-x-12">
                        {
                            FooterList.socialMedias.map(item =><a href={`https://${item}.com`}> <li className="font-normal transition-all duration-200">{item}</li></a>)
                        }
                    </ul>
                    <ul className="list-none flex max-lg:flex-col max-lg:justify-between h-full lg:justify-center items-start gap-x-12 gap-y-8">
                        {
                            FooterList.terms.map(item =><a href={`https://google.com`}> <li className="font-normal transition-all duration-200">{item}</li></a>)
                        }
                    </ul>
            </div>
            <div className="w-[95%] h-[1px] bg-white max-lg:hidden"></div>
            <div className="w-full flex justify-between max-lg:flex-col gap-y-4 items-center gap-x-36">
            <div className="flex justify-center items-center text-center">
                <p>© 2035 by TrackMate. Created by <a href="https://github.com/AmirrezaAPTech" className="transition-all duration-200">AmirrezaAP</a></p>
            </div>
            <ul className="list-none flex justify-center flex-wrap gap-y-5 items-center gap-x-8">
                        {
                            FooterList.images.map(item => <li><img src={item} alt="images" /></li>)
                        }
            </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer