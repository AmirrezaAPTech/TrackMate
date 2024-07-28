import visa from "../../Img/Footer/Visa.webp"
import Diners from "../../Img/Footer/Diners.webp"
import Discover from "../../Img/Footer/Discover.webp"
import PayPal from "../../Img/Footer/PayPal.webp"
import Amex from "../../Img/Footer/brand-amex_3x.webp"
import Chinaunionpay from "../../Img/Footer//brand-chinaunionpay_3x.webp"
import Jcb from "../../Img/Footer/brand-jcb_3x.webp"
import Mastercard from "../../Img/Footer/brand-mastercard_3x.webp"

const Footer = () => {
  return (
    <div id="footer" className="lg:h-[25vh] h-[40vh] max-lg:pb-5 flex flex-col justify-center items-center gap-y-5">
        <div className="flex flex-col justify-start items-center gap-y-5">
        <div className="w-full h-[1px] bg-white lg:hidden"></div>
            <div className="flex justify-center items-center gap-x-36 px-2">
                    <ul className="list-none flex max-lg:flex-col gap-y-4 justify-center items-center gap-x-12">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Tiktok</li>
                        <li>Youtube</li>
                    </ul>
                    <ul className="list-none flex max-lg:flex-col max-lg:justify-between h-full lg:justify-center items-center gap-x-12">
                        <li>Terms & Conditions</li>
                        <li>Shipping & Returns</li>
                        <li>Privacy Policy</li>
                    </ul>
            </div>
            <div className="w-[95%] h-[1px] bg-white max-lg:hidden"></div>
            <div className="w-full flex justify-between max-lg:flex-col gap-y-4 items-center gap-x-36">
            <div className="flex justify-center items-center text-center">
                <p>© 2035 by TrackMate. Created by <a href="https://github.com/AmirrezaAPTech" >AmirrezaAP</a></p>
            </div>
            <ul className="list-none flex justify-center flex-wrap gap-y-5 items-center gap-x-8">
                        <li><img src={visa} alt="visa" /></li>
                        <li><img src={Diners} alt="Diners" /></li>
                        <li><img src={Discover} alt="Discover" /></li>
                        <li><img src={PayPal} alt="PayPal" /></li>
                        <li><img src={Amex} alt="Amex" /></li>
                        <li><img src={Chinaunionpay} alt="Chinaunionpay" /></li>
                        <li><img src={Jcb} alt="Jcb" /></li>
                        <li><img src={Mastercard} alt="Mastercard" /></li>
            </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer