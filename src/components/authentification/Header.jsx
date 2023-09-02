const Header=({
                                   heading,
                                   paragraph,
                                   linkName,
                                   linkUrl="#"
                               })=>{
    return(
        <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
        </div>
    )
}
export default Header;