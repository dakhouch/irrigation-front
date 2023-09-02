import Header from "../../components/authentification/Header"
import Login from "../../components/authentification/Login"
import logo from "../../assets/logo/irrigationLogo.png";

export default function LoginPage(){
    return(
        <div className="min-h-full h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-100 ">
            <div className="flex justify-center p-6">
                <img
                    alt=""
                    className="h-36"
                    src={logo}/>
            </div>
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-12 ">
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login/>
            </div>
        </div>
    )
}